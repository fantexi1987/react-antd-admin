import Mock from 'mockjs';

import menuAPI from './menu';
import authAPI from './auth';
// import tableAPI from './table';

Mock.mock(/\/menu/, 'get', menuAPI.getAllMenu);

Mock.mock(/\/getChildRoutes/, 'get', menuAPI.getChildRoutes);

Mock.mock(/\/login/, 'put', authAPI.login);

Mock.mock(/\/logout/, 'get', authAPI.logout);

Mock.mock(/\/my/, 'get', authAPI.fetchProfile);

// Mock.mock(/\/randomUser/, 'get', tableAPI.randomUser);


export default Mock;
