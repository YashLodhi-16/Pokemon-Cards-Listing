/// <reference types="vite/client" />

interface ViteTypeOptions {
  strictImportMetaEnv: unknown;
}

interface ImportMetaEnv {
  readonly VITE_POKEMON_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
