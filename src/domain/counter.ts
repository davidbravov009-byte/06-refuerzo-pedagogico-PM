 
export type Direccion = 'incrementar' | 'decrementar'; 
export type EstadoUI = 'MINIMO' | 'IDLE' | 'MAXIMO'; 
 
/** 
 * 📌 RECUERDA — ¿qué es esto? 
 * `ContadorConfig` es el "contrato" del contador: describe todo lo que un contador 
 * necesita saber para funcionar. 
 * 
 *   valor  → el número actual (cambia cada vez que el usuario toca). 
 *   paso   → cuánto sube o baja en cada toque. 
 *   minimo → el piso: el contador no baja de aquí. 
 *   maximo → el techo: el contador no sube de aquí. 
 * 
 * Se construye en la pantalla (`src/app/index.tsx`) y viaja hasta estas funciones. 
 * `readonly` = una vez creado, no se reescribe. 
 */ 
export interface ContadorConfig { 
  readonly valor: number; 
  readonly paso: number; 
  readonly minimo: number; 
  readonly maximo: number; 
} 
 
/** 
 * Calcula el siguiente valor del contador aplicando una dirección y el paso. 
 * 
 * @param config - Configuración actual del contador (`valor`, `paso`, `minimo`, `maximo`). 
 * @param direccion - `'incrementar'` para subir, `'decrementar'` para bajar. 
 * @returns El nuevo valor, **siempre** dentro de `[minimo, maximo]`. 
 * 
 * @example 
 * // Subir 1 desde 5 (con maximo 10) → 6 
 * calcularValor({ valor: 5, paso: 1, minimo: 0, maximo: 10 }, 'incrementar'); 
 */ 
export function calcularValor(config: ContadorConfig, direccion: Direccion): number { 
  // 👇 CHECK: reemplaza este return por tu lógica de cálculo 
  const siguiente =
    direccion === 'incrementar'
      ? config.valor + config.paso
      : config.valor - config.paso;

export type Direccion = 'incrementar' | 'decrementar';
export type EstadoUI = 'MINIMO' | 'IDLE' | 'MAXIMO';
  return Math.min(config.maximo, Math.max(config.minimo, siguiente));
} 
 
/** 
 * Determina el estado de la interfaz según la posición del valor. 
 * 
 * @param valor - Número actual del contador. 
 * @param config - Configuración del contador (usa `minimo` y `maximo`). 
 * @returns `'MINIMO'` si el valor llegó al piso, `'MAXIMO'` si llegó al techo, 
 *          `'IDLE'` en cualquier otro caso. 
 */ 
export function estadoUI(valor: number, config: ContadorConfig): EstadoUI { 
  // 👇 CHECK: reemplaza este return por tu lógica de unión discriminada 
  if (valor === config.minimo) {
    return 'MINIMO';
  }

/**
 * 📌 RECUERDA — ¿qué es esto?
 * `ContadorConfig` es el "contrato" del contador: describe todo lo que un contador
 * necesita saber para funcionar.
 *
 *   valor  → el número actual (cambia cada vez que el usuario toca).
 *   paso   → cuánto sube o baja en cada toque.
 *   minimo → el piso: el contador no baja de aquí.
 *   maximo → el techo: el contador no sube de aquí.
 *
 * Se construye en la pantalla (`src/app/index.tsx`) y viaja hasta estas funciones.
 * `readonly` = una vez creado, no se reescribe.
 */
export interface ContadorConfig {
  readonly valor: number;
  readonly paso: number;
  readonly minimo: number;
  readonly maximo: number;
}

/**
 * Calcula el siguiente valor del contador aplicando una dirección y el paso.
 *
 * @param config - Configuración actual del contador (`valor`, `paso`, `minimo`, `maximo`).
 * @param direccion - `'incrementar'` para subir, `'decrementar'` para bajar.
 * @returns El nuevo valor, **siempre** dentro de `[minimo, maximo]`.
 *
 * @example
 * // Subir 1 desde 5 (con maximo 10) → 6
 * calcularValor({ valor: 5, paso: 1, minimo: 0, maximo: 10 }, 'incrementar');
 */
export function calcularValor(config: ContadorConfig, direccion: Direccion): number {
  // 👇 TODO: reemplaza este return por tu lógica de cálculo
  return config.valor;
}
  if (valor === config.maximo) {
    return 'MAXIMO';
  }

/**
 * Determina el estado de la interfaz según la posición del valor.
 *
 * @param valor - Número actual del contador.
 * @param config - Configuración del contador (usa `minimo` y `maximo`).
 * @returns `'MINIMO'` si el valor llegó al piso, `'MAXIMO'` si llegó al techo,
 *          `'IDLE'` en cualquier otro caso.
 */
export function estadoUI(valor: number, config: ContadorConfig): EstadoUI {
  // 👇 TODO: reemplaza este return por tu lógica de unión discriminada
  return 'IDLE';
}