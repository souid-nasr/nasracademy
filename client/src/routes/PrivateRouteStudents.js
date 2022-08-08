import {Route, Redirect} from 'react-router-dom'

const PrivateRouteStudents = ({component: Component, ...rest} ) => {
    const StudentToken = localStorage.getItem('studentToken')

    if (StudentToken)
    return (<Route component={Component} />)
    
    return (<Redirect to='/' />)

}

export default PrivateRouteStudents