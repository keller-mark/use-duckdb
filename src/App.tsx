import DuckDB from '../lib/main'
import VITE_BUNDLES from './bundles'
import WeatherForecast from './components/WeatherForecast'
import Shell from './components/Shell'

export default function App() {
  return (
    <DuckDB bundles={VITE_BUNDLES}>
      <WeatherForecast />
      <Shell />
    </DuckDB>
  )
}
