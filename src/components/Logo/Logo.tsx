import clsx from 'clsx';
import styles from './Logo.module.scss';

interface LogoProps {
  full?: boolean;
}

function Logo({ full = false }: LogoProps) {
  return (
    <span className={clsx(styles.logo, !full && styles['logo--iconed'])}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 40 40"
      >
        <path
          fill="#61D7AC"
          fillRule="evenodd"
          d="m18.393.03-.98.058v39.824l.98.059a21.381 21.381 0 0 0 2.211 0l.98-.059V.088l-.98-.059a20.906 20.906 0 0 0-2.211 0Zm9.817 20.185a.817.817 0 0 1 0-.606l5.277-13.832-.524-.479a20.515 20.515 0 0 0-1.814-1.496l-1.096-.801L24.3 18.094a5.105 5.105 0 0 0-.01 3.617l5.744 15.288 1.106-.802c.63-.459 1.241-.967 1.814-1.495l.514-.48-5.258-14.007Zm-21.7-2.424-5.006-6.423-.64 1.77c-.311.86-.563 1.75-.757 2.659L0 16.276l2.813 3.597a.326.326 0 0 1 0 .41L.02 23.803l.107.488c.194.9.456 1.78.766 2.63l.64 1.74L6.5 22.395c1.086-1.369 1.086-3.216.01-4.604Zm32.497-1.564-2.804 3.538a.34.34 0 0 0-.01.41l2.804 3.588-.107.48a20.638 20.638 0 0 1-.766 2.649l-.64 1.759-4.986-6.393c-1.077-1.388-1.077-3.245.019-4.624l4.986-6.285.64 1.75c.311.85.563 1.74.757 2.639l.107.489ZM7.857 3.802l1.106-.801 5.763 15.347a5.105 5.105 0 0 1-.01 3.617L8.983 37.009l-1.096-.802c-.63-.46-1.242-.968-1.814-1.495l-.524-.48 5.258-13.782a.817.817 0 0 0 0-.606L5.529 5.787l.515-.489a20.532 20.532 0 0 1 1.814-1.496Z"
          clipRule="evenodd"
        />
      </svg>

      {full && <TextLogo />}
    </span>
  );
}

function TextLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="81"
      height="34"
      fill="none"
      viewBox="0 0 81 34"
    >
      <path
        fill="#283337"
        fillRule="evenodd"
        d="M7.236 14.664H4.888V.92h-4.2v31.69h4.2V18.867h5.568c.883 0 1.669.499 2.067 1.29l6.072 12.366.049.088h4.646l-7.042-14.33a3.378 3.378 0 0 1 0-3.02L23.28.93h-4.647l-6.111 12.453a2.294 2.294 0 0 1-2.067 1.29h-3.22v-.01ZM63.5 32.504V13.598h5.85c.514 0 1.018.147 1.445.43a2.5 2.5 0 0 1 .66.616c.155.215.223.44.29.694l.146.499.437 1.495v.004c.195.664.388 1.327.582 2 .111.386.225.775.34 1.164l.339 1.163c.242.82.485 1.652.718 2.473.116.406.235.814.354 1.222l.354 1.222c.106.37.215.742.323 1.114v.001l.001.001v.003h.001v.002c.11.373.218.746.325 1.117.092.308.182.616.271.924.09.308.18.616.272.924l.378 1.29c.025.093.051.183.078.274.027.09.053.18.078.274v.01H81l-5.558-19.102-.078-.156c-1.145-2.326-3.453-3.773-6.024-3.773h-9.943v23.03H63.5v-.01ZM27.918 5.817c-1.33 0-2.406-1.104-2.406-2.463 0-1.33 1.077-2.424 2.406-2.424a2.435 2.435 0 0 1 2.444 2.424 2.456 2.456 0 0 1-2.444 2.463Zm2.114 3.549h-4.2V32.62h4.2V9.366ZM44.758 33.07c-6.529 0-11.845-5.405-11.845-12.052 0-3.246 1.223-6.296 3.444-8.573a11.67 11.67 0 0 1 8.401-3.539c6.664 0 11.883 5.318 11.883 12.102 0 3.226-1.222 6.246-3.434 8.514-2.23 2.288-5.228 3.548-8.449 3.548Zm0-4.183c4.288 0 7.644-3.46 7.644-7.87 0-4.437-3.366-7.907-7.644-7.907-4.268 0-7.605 3.47-7.605 7.908 0 4.408 3.337 7.869 7.605 7.869Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default Logo;