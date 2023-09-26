import React, { useState } from 'react'
import styles from './App.module.css'
import poweredImage from './assets/powered.png'
import { Level, calculeteImc, levels } from './helpers/imc';
import { GridItem } from './components/GridItem/Index';
import leftarrow from './assets/leftarrow.png';


const App = () => {

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalc = () => {
    if (weight && height) {
      setToShow(calculeteImc(weight, height));
    }
    else {
      alert('informe o Peso e a Altura')
    }
  }

  const handleBack = () => {
    setToShow(null);
    setHeight(0);
    setWeight(0);
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt='' width={150} />
        </div>
      </header>

      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1> Calculo de IMC </h1>
          <p> O IMC (Índice de Massa Corporal)é reconhecido pela OMS (Organização Mundial
            da Saúde)como um
            padrão internacional que avalia se as pessoas,
            entre 20 e 59 anos, estão
            com peso ideal ou emexcesso,
            em relação a sua altura. No entanto, vale
            lembrar que o resultado não indica como está o estado nutricional</p>

          <input
            type="number"
            placeholder='Informe sua altura. Ex: 1.50 (em metro)'
            value={height > 0 ? height : ''}
            onChange={t => setHeight(parseFloat(t.target.value))}
          />

          <input
            type="number"
            placeholder='Informe seu peso. Ex: 50 (em kilo)'
            value={weight > 0 ? weight : ''}
            onChange={t => setWeight(parseFloat(t.target.value))}
          />

          <button onClick={handleCalc}> Calcular </button>

        </div>

        <div className={styles.rightSide}>
          {!toShow &&
            <div className={styles.grid}>
              {levels.map((item) => (
                <GridItem item={item} />
              ))}
            </div>
          }
          {toShow &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBack} >
                <img src={leftarrow} width={25} />
              </div>
              <GridItem item={toShow} />

            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default App;