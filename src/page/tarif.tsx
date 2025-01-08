import '../assets/style/styleTarif.css';

const Tarif =({}) => {
    return(
        <section id="tarif">
            <h1 className="tarif-title">Tarif</h1>
<div className="pricing-table-container">
      <table className="pricing-table">
        <thead>
          <tr>
            <th>Type de Massage</th>
            <th colSpan={3}>Tarifs</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>Massage détente</td>
              <td>45€ | 45 min</td>
              <td>60€ | 1h</td>
              <td>75€ | 1h15</td>
            </tr>
            <tr>
                <td>Massage Détente active (ce soin doit être suivi d'un enveloppement aux huiles essentielles)</td>
                <td>60€ | 50 min</td>
                <td>70€ | 1h</td>
                <td>80€ | 1h15</td>
            </tr>
            <tr>
                <td>Réflexologie plantaire</td>
                <td colSpan={3}>60€ | 50 min</td>
            </tr>
            <tr>
                <td>Enveloppements  aux huiles essentielles</td>
                <td colSpan={3}>35€ | 30 min</td>
            </tr>
            <tr>
                <td>Soin Cryo thermique</td>
                <td colSpan={3}>30€ | 30 min</td>
            </tr>
            <tr>
                <td>Massage Visage</td>
                <td colSpan={3}>60€ | 50 min</td>
            </tr>
            <tr>
                <td>Massage femme prénatal</td>
                <td colSpan={3}>60€ | 50 min</td>
            </tr>
            <tr>
                <td>Massage minceur - raffermissant</td>
                <td colSpan={3}>60€ | 50 min</td>
            </tr>
        
        </tbody>
      </table>
    </div>
        </section>
    )
}

export default Tarif