
import NotificationButton from '../NotificationButton'
import './styles.css'

function SalesCard() {
    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-input-container">
                    <input className="dsmeta-input" type="text" />
                </div>
                <div className="dsmeta-input-container">
                    <input className="dsmeta-input" type="text" />
                </div>
            </div>

            <div>
                <table className="dsmeta-table">
                    <thead>
                        <tr>
                            <th className="show900">ID</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show900">Visitas</th>
                            <th className="show900">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show900">#341</td>
                            <td className="show576">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="show900">15</td>
                            <td className="show900">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show900">#341</td>
                            <td className="show576">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="show900">15</td>
                            <td className="show900">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show900">#341</td>
                            <td className="show576">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="show900">15</td>
                            <td className="show900">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SalesCard