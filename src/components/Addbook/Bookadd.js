import Addbook from './addbook'
import {useSelector} from 'react-redux';
import AddBookImage from './addBookImage';


function Bookadd(){

    

        const addImage = useSelector(state => state.addImage);

        return (
            <div>
                {addImage ? <Addbook />  : <Addbook />}
            </div>

        );
    

}

export default Bookadd ;