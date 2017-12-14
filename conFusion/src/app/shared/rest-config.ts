import { baseURL} from './baseUrl';

export function  RestangularConfigFactory(RestangularProvider){
	RestangularProvider.setBaseUrl(baseURL);
}