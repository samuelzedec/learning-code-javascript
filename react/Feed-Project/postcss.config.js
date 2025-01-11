// postcss.config.js
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss,  // Carrega o Tailwind CSS
    autoprefixer,  // Adiciona prefixos automáticos
  ],
};
