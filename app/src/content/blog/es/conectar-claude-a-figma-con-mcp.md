---
title: "Conectar Claude a Figma con MCP"
description: >
  Una guía práctica para conectar Claude a Figma usando figma-console-mcp —
  dos caminos, paso a paso, con notas honestas sobre qué funciona y qué no.
date: 2026-03-18
tags: ["ai", "devtools", "figma", "mcp", "tutorial", "claude"]
lang: es
draft: false
---

Escribes "Extrae todos los tokens de color de este archivo y muéstrame los valores de modo Claro y Oscuro uno al lado del otro" y Claude lo hace. Escribes "Crea un componente de tarjeta con una imagen de cabecera, título y botón de acción" y aparece en tu canvas de Figma. Sin copiar y pegar, sin cambiar de pestaña, sin ciclos de exportar e importar.

Eso es lo que hace posible figma-console-mcp. Es un servidor MCP — un proceso pequeño que le da a Claude un conjunto de herramientas que puede invocar para interactuar con Figma directamente. Leer archivos, extraer variables, crear frames, gestionar tokens. La configuración tarda unos diez minutos.

Hay dos caminos. Si tienes Node.js instalado, usa el camino NPX — obtienes el conjunto completo de herramientas, 59+, incluyendo depuración de plugins en tiempo real y creación de diseños. Si quieres empezar desde Claude.ai en el navegador sin instalar nada localmente, usa Cloud Mode — 43 herramientas, acceso de escritura incluido, sin terminal. Ambos caminos están cubiertos abajo. Elige el que se adapte a ti.

## Qué es figma-console-mcp

MCP (Model Context Protocol) es un estándar para dar a los asistentes de IA acceso a herramientas externas. figma-console-mcp es un servidor MCP de código abierto — licencia MIT, 1.1k estrellas en GitHub — que conecta Claude con la Plugin API y la REST API de Figma.

Cuando está en ejecución, Claude tiene acceso a un conjunto de herramientas que puede invocar durante una conversación:

- Leer tokens de diseño, variables y sus valores entre modos
- Extraer datos de componentes, estilos y especificaciones visuales
- Crear frames, formas y texto directamente en un archivo de Figma
- Gestionar colecciones de variables y modos (agregar, renombrar, eliminar)
- Tomar capturas de pantalla del canvas actual para contexto visual
- Verificar la paridad diseño-código entre un componente y su implementación

Claude decide cuándo llamar a estas herramientas según lo que le preguntas. No las invocas manualmente.

## Requisitos previos

Antes de empezar, verifica qué camino vas a tomar.

**Camino NPX:**
- Node.js 18 o posterior — verifica con `node --version`
- Figma Desktop (la app nativa, no la web)
- Un Personal Access Token de Figma
- Claude Code CLI o Claude Desktop

**Camino Cloud Mode:**
- Figma Desktop (la app nativa, no la web)
- Un Personal Access Token de Figma
- Una cuenta en Claude.ai

Ambos caminos requieren Figma Desktop. El plugin bridge que conecta Claude con tus archivos solo funciona en el cliente de escritorio, no en el navegador.

## Camino A: Configuración con NPX

Esto te da el conjunto completo de herramientas: 59+, monitoreo de consola en tiempo real y creación de diseños. Recomendado si tienes Node.js disponible.

### Paso 1: Obtén un Personal Access Token de Figma

En Figma, abre el menú de tu cuenta en la esquina superior izquierda y ve a **Configuración**. En la sección **Seguridad**, busca **Personal access tokens** y haz clic en **Generate new token**.

Dale una descripción — "figma-console-mcp" funciona bien — y copia el token inmediatamente. Comienza con `figd_` y no lo verás de nuevo después de cerrar el diálogo.

### Paso 2: Agrega el servidor MCP a tu cliente

**Claude Code:**

```bash
claude mcp add figma-console -s user \
  -e FIGMA_ACCESS_TOKEN=figd_TU_TOKEN_AQUI \
  -e ENABLE_MCP_APPS=true \
  -- npx -y figma-console-mcp@latest
```

Reemplaza `figd_TU_TOKEN_AQUI` con el token que copiaste. Este comando registra el servidor y guarda la configuración en `~/.claude.json`.

**Claude Desktop:**

Encuentra el archivo de configuración según tu plataforma:

| App | macOS | Windows |
|-----|-------|---------|
| Claude Desktop | `~/Library/Application Support/Claude/claude_desktop_config.json` | `%APPDATA%\Claude\claude_desktop_config.json` |
| Cursor | `~/.cursor/mcp.json` | `%USERPROFILE%\.cursor\mcp.json` |
| Windsurf | `~/.codeium/windsurf/mcp_config.json` | `%USERPROFILE%\.codeium\windsurf\mcp_config.json` |

Abre el archivo en cualquier editor de texto y agrega lo siguiente dentro del objeto `mcpServers`. Crea el archivo si no existe.

```json
{
  "mcpServers": {
    "figma-console": {
      "command": "npx",
      "args": ["-y", "figma-console-mcp@latest"],
      "env": {
        "FIGMA_ACCESS_TOKEN": "figd_TU_TOKEN_AQUI",
        "ENABLE_MCP_APPS": "true"
      }
    }
  }
}
```

### Paso 3: Instala el plugin Desktop Bridge

El plugin Desktop Bridge es la pieza que se ejecuta dentro de Figma y transmite los comandos del servidor MCP a tu canvas. Lo instalas una vez y queda en tu lista de plugins de desarrollo.

Primero, encuentra dónde NPX instaló el paquete:

```bash
npx figma-console-mcp@latest --print-path
```

Esto imprime una ruta absoluta. Anótala.

En Figma Desktop, ve a **Plugins → Development → Import plugin from manifest**. Navega a la ruta anterior y selecciona `figma-desktop-bridge/manifest.json`.

Abre un archivo de Figma y ejecuta el plugin desde **Plugins → Development → Figma Desktop Bridge**. Se conecta automáticamente via WebSocket. Verás un indicador de estado en el panel del plugin.

### Paso 4: Reinicia tu cliente MCP

Cierra y vuelve a abrir Claude Desktop, Claude Code o el cliente que configuraste. El nuevo servidor se cargará al inicio.

### Paso 5: Verifica la conexión

Con el plugin Desktop Bridge en ejecución en un archivo de Figma, pregúntale a Claude:

```
Check Figma status
```

Deberías ver una respuesta mostrando una conexión WebSocket activa. Luego prueba el primer test real:

```
Create a simple frame with a blue background
```

Si aparece un frame en tu canvas, el acceso de escritura está funcionando.

## Camino B: Cloud Mode

Sin Node.js, sin terminal. Funciona desde Claude.ai en el navegador. Obtienes 43 herramientas incluyendo acceso de escritura completo — creación de diseños, gestión de variables, instanciación de componentes. Lo que pierdes comparado con NPX: monitoreo de logs de consola en tiempo real y seguimiento de selección en vivo.

### Paso 1: Obtén un Personal Access Token de Figma

Igual que en el Camino A. **Configuración → Seguridad → Generate new token**. Cópialo inmediatamente.

### Paso 2: Agrega el conector en Claude.ai

En Claude.ai, abre **Configuración → Connectors → Add Custom Connector**.

- **Nombre:** figma-console
- **URL:** `https://figma-console-mcp.southleft.com/mcp`
- **Autenticación:** Bearer token — pega tu PAT de Figma

Guarda el conector.

### Paso 3: Instala el plugin Desktop Bridge

Mismo plugin que en el Camino A. En Figma Desktop, ve a **Plugins → Development → Import plugin from manifest** e importa desde el directorio del paquete figma-console-mcp.

Si no tienes Node.js para ejecutar `--print-path`, clona el repo y apunta la importación al archivo manifest:

```bash
git clone https://github.com/southleft/figma-console-mcp
```

Luego importa desde `figma-console-mcp/figma-desktop-bridge/manifest.json`.

### Paso 4: Empareja Claude.ai con el plugin

Abre un archivo de Figma y ejecuta el plugin Desktop Bridge. En el panel del plugin, activa **Cloud Mode**.

En Claude.ai, pregunta:

```
Connect to my Figma plugin
```

Claude te dará un código de emparejamiento de 6 caracteres. El código expira en 5 minutos. Ingrésalo en el panel del plugin y haz clic en **Connect**.

Una vez emparejado, Claude tiene acceso de escritura al archivo de Figma abierto.

### Paso 5: Pruébalo

```
Create a card component with a title, description, and action button
```

Un frame debería aparecer en tu canvas.

El emparejamiento persiste durante la sesión. Si reinicias Figma o el plugin, pídele a Claude un nuevo código de emparejamiento.

## Cosas que puedes hacer ahora

Algunos prompts para mostrar el alcance. Funcionan en ambos caminos a menos que se indique lo contrario.

**Leer datos de diseño:**

```
Get all design variables from [URL de tu archivo de Figma]
Extract the color styles from this file
Get the Button component with a visual reference image
```

**Crear diseños:**

```
Create a login form with email, password, and a submit button — 32px padding, 8px border radius
Design a notification toast with an icon on the left, title and body text, and a dismiss button
Build a navigation bar with a logo on the left, centered menu items, and a user avatar on the right
```

**Gestionar tokens:**

```
Create a color collection called "Brand Colors" with Light and Dark modes
Add a primary color variable — #3B82F6 for Light, #60A5FA for Dark
Add a "High Contrast" mode to the existing token collection
```

**Depurar plugins (solo NPX):**

```
Watch the console for 30 seconds while I test my plugin
Show me any errors from the current plugin
```

Para la lista completa de herramientas disponibles, consulta el [TOOLS.md](https://github.com/southleft/figma-console-mcp) en el repo.

## Cuando algo no funciona

**El plugin no se conecta.** Probablemente estás usando Figma en el navegador. El plugin Desktop Bridge requiere la app nativa Figma Desktop. La app web no lo soporta.

**"Check Figma status" no muestra conexión activa.** El plugin necesita estar en ejecución en Figma Desktop al mismo tiempo que tu cliente MCP. Abre un archivo, ejecuta el plugin desde **Plugins → Development** y vuelve a intentarlo.

**El código de emparejamiento de Cloud Mode no funciona.** Los códigos expiran en 5 minutos. Pídele a Claude uno nuevo. Asegúrate de que el plugin esté en Cloud Mode antes de ingresar el código — el interruptor está en el panel del plugin.

**"Cannot read design variables" o las variables están vacías.** Algunas operaciones de variables van a través del plugin Desktop Bridge, no de la REST API. El plugin necesita estar en ejecución en el mismo archivo que estás usando. Reinícialo y vuelve a intentarlo.

**Token rechazado o error de autenticación.** Verifica que el token comience con `figd_` y no haya sido truncado al pegarlo. Los tokens de Figma son largos — si el tuyo termina abruptamente, regenéralo. Para Cloud Mode, asegúrate de haberlo ingresado como Bearer token, no en un campo de query string o nombre de header.

**Conflicto de puerto en NPX.** Si ejecutas dos clientes MCP al mismo tiempo (por ejemplo, Claude Desktop y Claude Code), competirán por el puerto 9223. El servidor lo maneja automáticamente — hace fallback por los puertos 9224 a 9232. Si ves una advertencia de puerto, no es un error. Ambas instancias funcionarán.

Para cualquier cosa no cubierta aquí, revisa los [issues de GitHub](https://github.com/southleft/figma-console-mcp/issues). El repo se mantiene activamente.

## Conclusión

Ahora tienes Claude conectado a Figma. Puede leer tus archivos de diseño, extraer tokens, crear componentes y gestionar variables — todo desde una conversación.

Una nota honesta: los diseños generados por IA son buenos para crear estructura base e iteración rápida. Un prompt como "crear un formulario de login" te da un punto de partida razonable, no un componente listo para producción. Espera limpiar el espaciado, cambiar a tipografía real y ajustar cosas para que coincidan con tu sistema de diseño. La herramienta recupera su tiempo en extracción y gestión de tokens, donde el resultado es preciso en lugar de generativo.

Una buena siguiente cosa para probar: pídele a Claude que audite tu sistema de diseño. "Audit the design system from [URL del archivo]" activa el Design System Dashboard — un informe puntuado sobre nomenclatura, tokens, componentes y consistencia. Es una forma útil de ver qué puede descubrir la herramienta cuando tiene acceso de lectura completo a un archivo.
