import { App } from 'vue'
import 'xe-utils'
// import { i18n } from '/@/local'
import {
  // 全局对象
  VXETable,

  // 表格功能
  Icon,
  Filter,
  Edit,
  Menu,
  Export,
  Keyboard,
  Validator,

  // 可选组件
  Column,
  Colgroup,
  Grid,
  Tooltip,
  Toolbar,
  Pager,
  Form,
  FormItem,
  FormGather,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  RadioButton,
  Switch,
  Input,
  Select,
  Optgroup,
  Option,
  Textarea,
  Button,
  Modal,
  List,
  Pulldown,

  // 表格
  Table
} from 'vxe-table'

import 'vxe-table/lib/style.css'

// 全局默认参数
VXETable.setup( {
  size : 'medium', // 全局尺寸 medium, small, mini
  zIndex : 999, // 全局 zIndex 起始值，如果项目的的 z-index 样式值过大时就需要跟随设置更大，避免被遮挡
  version : 0, // 版本号，对于某些带数据缓存的功能有用到，上升版本号可以用于重置数据
  loadingText : '加载中，请稍后...', // 自定义loading提示内容，如果为null则不显示文本
  table : {
    autoResize : true, // 自动监听父元素的变化去重新计算表格
    border : false,
    emptyText : '暂无数据',
    keepSource : false, // 保持原始值的状态，被某些功能所依赖，比如编辑状态、还原数据等（开启后影响性能，具体取决于数据量）
    round : false,
    showFooter : false,
    showFooterOverflow : true,
    showHeader : true,
    showHeaderOverflow : true,

    showOverflow : true, // 设置所有内容过长时显示为省略号（如果是固定列建议设置该值，提升渲染速度）
    stripe : false,
    // size : 'medium', // medium, small, mini

    rowConfig : {
      useKey : false,
      isCurrent : true, // 当鼠标点击行时，是否要高亮当前行
      isHover : true, // 当鼠标移到行时，是否要高亮当前行
      keyField : '_X_ROW_KEY' // 行数据的唯一主键字段名
    },

    radioConfig : {
      strict : true,
      reserve : false,
      trigger : 'default'
    },
    checkboxConfig : {
      strict : true,
      highlight : true,
      range : false,
      trigger : 'default'
    },

    expandConfig : {
      trigger : 'default',
      showIcon : true
    },
    treeConfig : {
      rowField : 'id',
      parentField : 'parentId',
      children : 'children',
      hasChild : 'hasChild',
      mapChildren : '_X_ROW_CHILD',
      indent : 20,
      showIcon : true
    },
    tooltipConfig : {
      enterable : true
    },
    menuConfig : {
      className : 'vt-menus'
      // // 该函数的返回值用来决定是否允许显示右键菜单（对于需要对菜单进行权限控制时可能会用到）
      // visibleMethod() {}
    },
    // 可编辑配置项
    editConfig : {
      mode : 'cell',
      showAsterisk : true
    },
    importConfig : {
      modes : ['insert', 'covering']
    },
    exportConfig : {
      modes : ['current', 'selected']
    },
    customConfig : {
      storage : false
    },
    scrollX : {
      gt : 60
    },
    scrollY : {
      gt : 100
    }
  },

  input : {
    clearable : true
    // size : 'medium',
    // transfer : false,
    // parseFormat : 'yyyy-MM-dd HH:mm:ss.SSS',
    // labelFormat : '',
    // valueFormat : '',
    // startDay : 1,
    // digits : 2,
    // controls : true
  },
  textarea : {
    size : null,
    autosize : {
      minRows : 1,
      maxRows : 10
    }
  }
} )

export function useTable( app: App ) {
  app
    .use( Icon )
    .use( Filter )
    .use( Edit )
    .use( Menu )
    .use( Export )
    .use( Keyboard )
    .use( Validator )
    // 可选组件
    .use( Column )
    .use( Colgroup )
    .use( Grid )
    .use( Tooltip )
    .use( Toolbar )
    .use( Pager )
    .use( Form )
    .use( FormItem )
    .use( FormGather )
    .use( Checkbox )
    .use( CheckboxGroup )
    .use( Radio )
    .use( RadioGroup )
    .use( RadioButton )
    .use( Switch )
    .use( Input )
    .use( Select )
    .use( Optgroup )
    .use( Option )
    .use( Textarea )
    .use( Button )
    .use( Modal )
    .use( List )
    .use( Pulldown )
    // 安装表格
    .use( Table )
}
