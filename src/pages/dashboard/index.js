import { Navigate } from "react-router-dom"
import authenticated from '../../services/AuthServices'
import toast from 'react-hot-toast'

import OperationsEnum from '../../utils/OperationsEnum'
import Template from '../../components/Template/Template'

function Dashboard(){
    
    if(!authenticated()){
        return <Navigate replace to="/login" />
    } else {
        return(
            <>
                <Template operation={ OperationsEnum.DASHBOARD } />

                <div className="content-backoffice">
                    <Template.SubHeaderPage title='Dashboard' subtitle='Seja bem-vindo(a) ao seu Dashboard, veja aqui o resumo do seu negócio.' />
                </div>
            </>
        )
    }
}

export default Dashboard