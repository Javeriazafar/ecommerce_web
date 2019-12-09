import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './directory.scss';
import Menu from '../menu-item/menu-item.component';
import DirectoryReducer from '../../redux/directory/directory.reducer';
import { DirectorySelector } from '../../redux/directory/directory.selector';

const Directory=({section})=> (

    <div className='directory-menu'>
     {section.map(({id,...someSection}) =>
        ( <Menu key= {id} {...someSection} />))}
        </div>
 
 );
const mapStateToProps=createStructuredSelector({
  section: DirectorySelector
}
)
export default connect(mapStateToProps) (Directory);