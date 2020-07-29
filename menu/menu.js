const menu = [
    {
      path: '/',
      name: '首页',
      icon: 'ios-home-outline',
      hide: true,
    },
    {
      path: '/a',
      name: '测试1',
      icon: 'ios-leaf',
      children: [
        {
          path: '/a/b',
          name: '测试2',
          icon: 'ios-leaf',
          admin: true,
        }
      ]
    },
    {
      path: '/b',
      name: '测试3',
      icon: 'ios-leaf',
      children: [
        {
          path: '/b/c',
          name: '测试4',
          icon: 'ios-leaf',
        }
      ]
    },
]

export default menu