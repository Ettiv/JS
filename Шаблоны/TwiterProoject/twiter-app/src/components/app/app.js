import React , {Component} from 'react';

import "./app.css"
import styled from "styled-components";

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStausFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

const AppBlock = styled.div` // будет создан див с такими правилами
margin: 0 auto;
max-width: 800px;
`;

const StyledAppBlock = styled(AppBlock)`
{/* на основе одного создаём другой,добавляем нвые стили*/}
    background-color: grey;
`

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:[
                {label: "Going to learn react" , important: true, like:false , id: 1},
                {label: "That is good" , important:false, like:false , id: 2},
                {label: "I need a break" , important:false, like:false, id: 3}
            ],

            term: '',

            filter: 'all'
        };

        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);


        this.maxId = 4;

    }
 // State напрямую менять нельзя!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    deleteItem(id){
        this.setState(({data}) => {
            const index  = data.findIndex(elem => elem.id === id );

            const before = data.slice(0, index);
            const after = data.slice(index+1); // до конца

            const newArr = [...before, ...after];

            return {
                data: newArr
            }
        });
    }



    addItem(body){
        const newItem = {
            label: body,
            important : false,
            id: this.maxId++
        }

        this.setState(({data}) => {
            const newArr = [...data , newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleImportant(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old  =data[index];
            const newItem = {...old, important: !old.important}; //like - перезапишет свойство старого объекта

            const newArr = [...data.slice(0, index),newItem, ...data.slice(index+1)];

            return {
                data: newArr
            }
        });
    }

    onToggleLiked(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old  =data[index];
            const newItem = {...old, like: !old.like}; //like - перезапишет свойство старого объекта

            const newArr = [...data.slice(0, index),newItem, ...data.slice(index+1)];

            return {
                data: newArr
            }
        });
    }

    searchPost(items, term){
        if(term.length === 0){
            return items
        }

        return items.filter( (item) =>{
            return item.label.indexOf(term) > -1;
        });
    }

    filterPost(items, filter){
        if (filter === 'like'){
            return items.filter(item => item.like === true);
        } else {
            return items;
        }
    }

    onFilterSelect(filter){
        this.setState({filter});
    }

    onUpdateSearch(term){
        this.setState({term});
    }

    render(){

        const {data ,term ,filter} = this.state;

        const liked = this.state.data.filter(item => item.like).length;//filtr - возвращает новый массив
        const allPosts = this.state.data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return(
            <AppBlock>
                <AppHeader
                liked = {liked}
                allPosts = {allPosts}/>
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch = {this.onUpdateSearch}/>
                    <PostStausFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <PostList 
                posts = {visiblePosts}
                onDelete={this.deleteItem}
                onToggleImportant = {this.onToggleImportant}
                onToggleLiked = {this.onToggleLiked}/>
                <PostAddForm
                onAdd ={this.addItem}/>
            </AppBlock>
        );
    }
}

