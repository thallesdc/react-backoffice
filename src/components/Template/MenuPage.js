import { useEffect, useState } from 'react';
import { Navigate, Link, useNavigate } from "react-router-dom"
import './MenuPage.css'
import OperationsEnum from '../../utils/OperationsEnum'
import imageLogo from '../../assets/img/template/logo.png'
import profileDefault from '../../assets/img/template/profile_default.png'

import { BiCart } from 'react-icons/bi'
import { BsBox2 } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { CiDeliveryTruck } from 'react-icons/ci'
import { GoGraph } from 'react-icons/go'
import { IoIosArrowForward } from 'react-icons/io'
import { IoBusinessOutline } from 'react-icons/io5'
import { LiaBoxesSolid, LiaNewspaperSolid } from 'react-icons/lia'
import { LuSend } from 'react-icons/lu'
import { MdOutlineMonitorHeart, MdOutlinePointOfSale } from 'react-icons/md'
import { PiUsers, PiTextAlignCenterBold } from 'react-icons/pi'
import { RiLogoutBoxLine } from 'react-icons/ri' 
import { RxPerson } from 'react-icons/rx'
import { TbBrandGoogleAnalytics, TbCategory, TbDiscount } from 'react-icons/tb'


import { FaCalendarAlt, FaSchool } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { HiBellAlert } from "react-icons/hi2";
import { IoDocumentText } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import { FaPeopleGroup, FaPeopleRoof, FaPeopleLine  } from "react-icons/fa6";


export default function MenuPage(props){
    const navigate = useNavigate();

    let loadOperation = false
    const full_name = localStorage.getItem('dcsolution.user.name')
    const operations = localStorage.getItem('dcsolution.user.operations')

    // MENU
    const rootMenu = [
        {
            title: "Dashboard",
            navigation: "/dashboard",
            operation: OperationsEnum.DASHBOARD,
            icon: <GoGraph className="menu-item-icon" />
        },
        {
            title: "Pág. Exemplo",
            navigation: "/examplepage",
            icon: <RxPerson className="menu-item-icon"iii />
        }
    ]

    const institutionMenu = [
        {
            title: "Avisos",
            navigation: "/warnings",
            operation: OperationsEnum.WARNINGS,
            icon: <HiBellAlert className="menu-item-icon" />
        },
        {
            title: "Cronograma",
            navigation: "/calendar",
            operation: OperationsEnum.CALENDAR,
            icon: <FaCalendarAlt className="menu-item-icon" />
        },
        {
            title: "Ementas",
            navigation: "/menus",
            operation: OperationsEnum.MENUS,
            icon: <IoDocumentText className="menu-item-icon" />
        },
        {
            title: "Instituição",
            navigation: "/partner",
            operation: OperationsEnum.PARTNER,
            icon: <FaSchool className="menu-item-icon" />
        },
    ]

    const financeMenu = [
        {
            title: "Contas a Pagar",
            navigation: "/billstopay",
            operation: OperationsEnum.BILLS_TO_PAY,
            icon: <MdOutlinePayment className="menu-item-icon" />
        },
        {
            title: "Contas a Receber",
            navigation: "/billstoreceive",
            operation: OperationsEnum.BILLS_TO_RECEIVE,
            icon: <GiMoneyStack className="menu-item-icon" />
        },
    ]

    const administrationMenu = [
        {
            title: "Alunos",
            navigation: "/students",
            operation: OperationsEnum.STUDENTS,
            icon: <FaPeopleLine className="menu-item-icon" />
        },
        {
            title: "Colaboradores",
            navigation: "/collaborators",
            operation: OperationsEnum.COLLABORATORS,
            icon: <FaPeopleGroup className="menu-item-icon" />
        },
        {
            title: "Turmas",
            navigation: "/classes",
            operation: OperationsEnum.CLASSES,
            icon: <FaPeopleRoof className="menu-item-icon" />
        },
    ]

    // VARIAVEIS SE TEM ACESSO A OPERACAO E SE MOSTRA NO MENU
    // const [billstopayOperationShow, setBillstopayOperationShow]                     = useState(false)
    // const [campaignsOperationShow, setCampaignsOperationShow]                       = useState(false)
    // const [categoriesOperationShow, setCategoriesOperationShow]                     = useState(false)
    // const [clientsOperationShow, setClientsOperationShow]                           = useState(false)
    // const [dashboardOperationShow, setDashboardOperationShow]                       = useState(true)
    // const [deliveryOperationShow, setDeliveryOperationShow]                         = useState(false)
    // const [institutionalTextsOperationShow, setInstitutionalTextsOperationShow]     = useState(false)
    // const [notificationsOperationShow, setNotificationsOperationShow]               = useState(false)
    // const [ordersOperationShow, setOrdersOperationShow]                             = useState(false)
    // const [partnersOperationShow, setPartnersOperationShow]                         = useState(false)
    // const [productsOperationShow, setProductsOperationShow]                         = useState(false)
    // const [profilesOperationShow, setProfilesOperationShow]                         = useState(false)
    // const [salesOperationShow, setSalesOperationShow]                               = useState(false)
    // const [stocksOperationShow, setStocksOperationShow]                             = useState(false)
    // const [usersOperationShow, setUsersOperationShow]                               = useState(false)

    function logout(){
        localStorage.removeItem('dcsolution.auth.originToken')
        localStorage.removeItem('dcsolution.auth.accessToken')
        localStorage.removeItem('dcsolution.auth.apitoken')
        localStorage.removeItem('dcsolution.auth.token')
        localStorage.removeItem('dcsolution.auth.refreshToken')
        localStorage.removeItem('dcsolution.auth.validity')

        localStorage.removeItem('dcsolution.user.firstname')
        localStorage.removeItem('dcsolution.user.lastname')

        for(let i = 0; i < 50; i++){
            localStorage.removeItem('dcsolution.user.operations['+i+']')
        }
    }

    // useEffect(() => {
    //     if(!loadOperation){
    //         for(let i = 0; i < 50; i++){
    //             const operation =  localStorage.getItem('dcsolution.user.operations['+i+']')
    //             if(operation == undefined){ break }

    //             if(operation === OperationsEnum.BILL_TO_PAY){ setBillstopayOperationShow(true) }
    //             else if(operation === OperationsEnum.CAMPAIGNS){ setCampaignsOperationShow(true) }
    //             else if(operation === OperationsEnum.CATEGORIES){ setCategoriesOperationShow(true) }
    //             else if(operation === OperationsEnum.CLIENTS){ setClientsOperationShow(true) }
    //             else if(operation === OperationsEnum.DELIVERY_MEN){ setDeliveryOperationShow(true) }
    //             else if(operation === OperationsEnum.INSTITUTIONAL_TEXT){ setInstitutionalTextsOperationShow(true) }
    //             else if(operation === OperationsEnum.NOTIFICATIONS){ setNotificationsOperationShow(true) }
    //             else if(operation === OperationsEnum.ORDERS){ setOrdersOperationShow(true) }
    //             else if(operation === OperationsEnum.PARTNERS){ setPartnersOperationShow(true) }
    //             else if(operation === OperationsEnum.PRODUCTS){ setProductsOperationShow(true) }
    //             else if(operation === OperationsEnum.PROFILES){ setProfilesOperationShow(true) }
    //             else if(operation === OperationsEnum.SALES){ setSalesOperationShow(true) }
    //             else if(operation === OperationsEnum.STOCKS){ setStocksOperationShow(true) }
    //             else if(operation === OperationsEnum.USERS){ setUsersOperationShow(true) }
    //         }

    //         loadOperation = true
    //     }
    // }, [])

    return(
        <nav className={`menu-container ${props.menuCollected ? 'menu-container-collected' : ''}`}>
            <div className="menu-container-content-profile">
                <div className="menu-content-profile-img">
                    <img src={ profileDefault } />
                </div>
                { full_name }
            </div>

            {
                rootMenu.map( menu => {
                    return(
                        <Link className={`menu-content-item ${ props.selected == menu.operation ? 'menu-content-item-selected': ''}`} to={ menu.navigation }>
                            { menu.icon } <span className="menu-text-item">{ menu.title }</span> <IoIosArrowForward className="menu-item-icon-arrow" />
                        </Link>
                    )
                })
            }

            {/* INSTITUIÇÃO */}
            <div className="menu-label-session">Instituição</div>
            {
                institutionMenu.map( menu => {
                    return(
                        <Link className={`menu-content-item ${ props.selected == menu.operation ? 'menu-content-item-selected': ''}`} to={ menu.navigation }>
                            { menu.icon } <span className="menu-text-item">{ menu.title }</span> <IoIosArrowForward className="menu-item-icon-arrow" />
                        </Link>
                    )
                })
            }
            

            {/* FINANCEIRO */}
            <div className="menu-label-session">Financeiro</div>
            {
                financeMenu.map( menu => {
                    return(
                        <Link className={`menu-content-item ${ props.selected == menu.operation ? 'menu-content-item-selected': ''}`} to={ menu.navigation }>
                            { menu.icon } <span className="menu-text-item">{ menu.title }</span> <IoIosArrowForward className="menu-item-icon-arrow" />
                        </Link>
                    )
                })
            }

            {/* ADMINISTRACAO */}
            <div className="menu-label-session">Administração</div>
            {
                administrationMenu.map( menu => {
                    return(
                        <Link className={`menu-content-item ${ props.selected == menu.operation ? 'menu-content-item-selected': ''}`} to={ menu.navigation }>
                            { menu.icon } <span className="menu-text-item">{ menu.title }</span> <IoIosArrowForward className="menu-item-icon-arrow" />
                        </Link>
                    )
                })
            }
            


            {/* FERRAMENTAR INTERNAS */}
            {/* <div className="menu-label-session">Ferramentas externas</div> */}

            {/* <Link className={ "menu-content-item " + dashboardSelected } to="https://react-icons.github.io/react-icons" target='blank'>
                <TbCategory className="menu-item-icon" /> <span className="menu-text-item">React Icons</span> <IoIosArrowForward className="menu-item-icon-arrow" />
            </Link> */}


            {/* LOGOUT */}
            <div className={`menu-container-btn-logout ${props.menuCollected ? 'menu-container-collected' : ''}`} >
                <Link onClick={ logout } className="menu-content-item" to="/login">
                    <RiLogoutBoxLine className="menu-item-icon" /> <span className="menu-text-item">Logout</span> <IoIosArrowForward className="menu-item-icon-arrow" />
                </Link>
            </div>
        </nav>
    )
}