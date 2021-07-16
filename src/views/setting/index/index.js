import React,{Component,Fragment} from 'react';
import Praise from './../../../img/praise.png';
import {Select, Button,DatePicker,Pagination} from 'antd';
import { UserOutlined,DownOutlined,CloseCircleFilled ,FormOutlined,PlusOutlined } from '@ant-design/icons';
import {getDepartmentList} from './../../../api/api'
import Titler from '../../compent/headerTitle/headerTitle'
import WeekreportConfig from './../weekreportConfig/weekreportConfig' //z周报配置
import MembersManagement from './../membersManagement/membersManagement'
import ItemCategory from './../itemCategory/itemCategory'//项目类别
import PermissionRole from './../permissionRole/index.js'//项目类别
import Nav from '../nav/index.js'//项目类别

// import ProAssigend from './../proAssigned/index.js'
// import ProAnalysis from './../proAnalysis/index.js'
const { Option } = Select;
let departListName='';
// import axios from 'axios';
class Project extends Component {
    constructor(props, context) {
        super(props)
        this.state = {
            partdata:'',   
            navList: [
                {id: 0, name: '周报配置',link:''},
                {id: 1, name: '项目类别',link:'show'},
                {id: 2, name: '人员管理',link:'product'},
                {id: 3, name: '权限角色',link:'serve'},
            ],
            departList:[],
            currentIndex:0,
            }
    
    }
componentWillUnmount(){
};
componentDidMount(){
    getDepartmentList().then(res=>{
        departListName=res.data.data.rows[0].name
        this.setState({
            departList:res.data.data.rows[0].children
        })
    })
};
onRef = (ref) => {
    this.child = ref
}
tabChoiced=(e,id)=>{
    e.stopPropagation()
    this.setState({currentIndex:id});
}
getdepartList=(e,id,item)=>{
    e.stopPropagation()
    console.log("获取选择的部门",id,item)
    let partdata={
        // "current":1,
        "deptId": id,
        // "name": "",
        // "roleId": 0,
        // "size": 0,
        // "status": 0
    }
    this.setState({partdata:partdata,})
    this.child.unitTable(partdata)
}  
handleChange = (value ) => {
    console.log(`selected ${value}`);
}

onChange= (date, dateString) =>{
    console.log(date, dateString);
}

render(){
    return (
        <Fragment>
            <div className='settingBox'>
            <Titler />
                <div className='content setttingWrap'>
                    <div className='left'>
                    <Nav/>
                    {/* <ul>
                        {
                            this.state.navList.map((item, index) => {
                            return (<li key={index} className={`${ item.id==this.state.currentIndex? 'subCtrl active' : 'subCtrl'}`} 
                            onClick={ e => this.tabChoiced(e, item.id) } id={index}>{item.name}</li>);
                            })
                        }
                    </ul> */}
                    </div>
                    <div className='Settingright'>
                        {/* <div className={`groupBox ${ 3==this.state.currentIndex? 'noneClass' : 'dispalyClass'}`} >
                            <div>{departListName}</div>
                            <ul>
                                {
                                   this.state.departList.map((item, index) => {
                                        return (
                                            <li key={index} onClick={e =>this.getdepartList(e,item.id,item)} id={index}>{item.name}</li>
                                        );
                                    })
                                }
                            </ul> 
                            </div>
                         */}
                            
                        </div>
                 </div>
       
            </div>
            
            </Fragment>
        )
    }
}


export default Project;