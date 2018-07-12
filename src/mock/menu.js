const menus =[
  {
    key: 5,
    name: 'Home',
    icon: 'home',
    url: '/home'
  },
  {
    key: 1,
    name: 'Pages',
    icon: 'user',
    child: [
      {
        name: 'Form',
        key: 102,
        url: '/form'
      },
      {
        name: 'Table',
        key: 103,
        url: '/table'
      },
      {
        name: 'Calendar',
        key: 104,
        url: '/calendar'
      },
      {
        name: 'Timeline',
        key: 105,
        url: '/timeline'
      },
      {
        name: 'Steps',
        key: 106,
        url: '/steps'
      }
    ]
  },
  {
    key: 2,
    name: 'Components',
    icon: 'laptop',
    child: [
      {
        name: 'Cards',
        key: 201,
        url: '/cards'
      },
      {
        name: '选项2',
        key: 202
      },
      {
        name: '选项3',
        key: 203
      },
      {
        name: '选项4',
        key: 204
      }
    ]
  },
  {
    key: 3,
    name: '导航三',
    icon: 'notification',
    child: [
      {
        name: '选项1',
        key: 301
      },
      {
        name: '选项2',
        key: 302
      },
      {
        name: '选项3',
        key: 303
      },
      {
        name: '选项4',
        key: 304
      }
    ]
  }
],
childRoutes = [{
  path:'/home',
  componentUrl:'/Home/index'
},{
  path:'/form',
  componentUrl:'/Form/index',
  'exactly': true
},{
  path:'/table',
  componentUrl:'/Table/index',
  'exactly': true
},{
  path:'/calendar',
  componentUrl:'/Calendar/index',
  'exactly': true
},{
  path:'/timeline',
  componentUrl:'/Timeline/index',
  'exactly': true
},{
  path:'/steps',
  componentUrl:'/Steps/index',
  'exactly': true
},{
  path:'/cards',
  componentUrl:'/Cards/index',
  'exactly': true
},{
  path:'/mailbox',
  componentUrl:'/Mailbox/index',
  'exactly': true
},{
  path:'/page2',
  componentUrl:'/Page2/index',
  'exactly': true
}]


export default {
  getAllMenu: config => {
    return menus
  },
  getChildRoutes: config => {
    return childRoutes
  }
};
