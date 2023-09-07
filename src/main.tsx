import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

//Tuve que eliminar el <React.StrictMode> porque renderiza los componentes 2 veces al ejecutarlo en modo desarrollo, y hacía que los intervalos se me generasen doble en App.tsx
ReactDOM.createRoot(document.getElementById('root')!).render(
    <App />
)
