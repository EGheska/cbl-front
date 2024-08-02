import {React} from 'react';
import Linker from '../components/linker';

const CBLPage = ({items}) => {
    return (
        <div className='pageClass'>
            <Linker className='linker' items={items}/>
            <div className='about-combl-box'>
                <div className='dropout-box'></div>
                <div className='dropout-box'></div>
                <div className='dropout-box'></div>
                <div className='dropout-box'></div>
                <div className='dropout-box'></div>
                <div className='dropout-box'></div>
                <div className='dropout-box'></div>
                <div className='dropout-box'></div>
                <div className='dropout-box'></div>
                <div className='dropout-box'></div>   
            </div>
        </div>
    );
}

export default CBLPage;