module.exports = {
  theme: {
    fontFamily: {
      display: ['Klima', 'sans-serif'],
      body: ['Noto Sans', 'sans-serif'],
      mono: ['Space Mono', 'monospace'],
    },
    container: {
      center: true,
      padding: '0.5rem'
    },
    colors: {
      blue: {
        default: '#1E1EFF',
        dark: '#0000E5',
      },
      green: {
        default: '#5AFFB4',
        light: '#80FFC5',
      },
      yellow: {
        default: '#FFFF00',
        light: '#FFFF9D',
      },
      white: '#FCFCFC',
      black: '#030303',
      gray: {
          '100': '#F2F2F2',
          '200': '#E6E6E6',
          '300': '#B3B3B3',
          '400': '#808080',
          '500': '#575757',
          '600': '#404040',
          '700': '#333333',
          '800': '#262626',
          '900': '#1A1A1A',
        }
    },
    borderRadius: {
      'sm': '.2rem',
    },
    transitionProperty: { // defaults to these values
      'none': 'none',
      'all': 'all',
      'color': 'color',
      'bg': 'background-color',
      'border': 'border-color',
      'colors': ['color', 'background-color', 'border-color'],
      'opacity': 'opacity',
      'transform': 'transform',
    },
    transitionDuration: { // defaults to these values
      'default': '250ms',
      '0': '0ms',
      '100': '100ms',
      '250': '250ms',
      '500': '500ms',
      '750': '750ms',
      '1000': '1000ms',
    },
    transitionTimingFunction: { // defaults to these values
      'default': 'ease',
      'linear': 'linear',
      'ease': 'ease',
      'ease-in': 'ease-in',
      'ease-out': 'ease-out',
      'ease-in-out': 'ease-in-out',
    },
    transitionDelay: { // defaults to these values
      'default': '0ms',
      '0': '0ms',
      '100': '100ms',
      '250': '250ms',
      '500': '500ms',
      '750': '750ms',
      '1000': '1000ms',
    },
    willChange: { // defaults to these values
      'auto': 'auto',
      'scroll': 'scroll-position',
      'contents': 'contents',
      'opacity': 'opacity',
      'transform': 'transform',
    },
    extend: {
      spacing: {
        '96': '24rem',
      }
    }
  },
  variants: { // all the following default to ['responsive']
    transitionProperty: ['responsive'],
    transitionDuration: ['responsive'],
    transitionTimingFunction: ['responsive'],
    transitionDelay: ['responsive'],
    willChange: ['responsive'],
  },
  plugins: [
    require('tailwindcss-transitions')(),
  ]
}
