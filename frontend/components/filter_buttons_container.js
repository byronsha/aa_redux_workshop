import { connect } from 'react-redux';
import FilterButtons from './filter_buttons';
import {
  toggleFilter
} from '../actions/todo_actions';

const mapStateToProps = state => ({
  filter: state.filter
});

const mapDispatchToProps = dispatch => ({
  toggleFilter: filter => dispatch(toggleFilter(filter)),
});

const FilterButtonsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterButtons);

export default FilterButtonsContainer;
