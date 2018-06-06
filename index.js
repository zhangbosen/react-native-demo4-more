import { AppRegistry } from 'react-native';
/*自己实现的轮播图*/
// import App from './App';

/*使用react-native-swiper实现的轮播图*/
// import Swiper from './components/Swiper';

/*下拉刷新,并请求新的数据, 请求是用setTimeout模拟来做的*/
// import Test from './components/Test';


/*使用ListView做购物车*/
// import Lv from './components/Lv';


/*使用ListView做九宫格*/
import Lv1 from './components/Lv1'


AppRegistry.registerComponent('focusMap', () => Lv1);