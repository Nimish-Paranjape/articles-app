import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchArticlesInit, deleteArticle } from '../../store/actions';
import SingleArticle from '../../components/SingleArticle/SingleArticle';
import Pagination from '../../components/Pagination/Pagination';

const Articles = props => {
    
    useEffect(() => {
        // const search = props.location.search;
        // const params = new URLSearchParams(search);
        // let page = params.get('page');
        // if(!page)
        //     page = 1;
        // console.log(page);
        props.fetchArticlesInit(getPage());
    }, [props.location]);

    const deleteHandler = id => {
        props.deleteArticle(id);
        props.fetchArticlesInit(getPage());
    }

    const getPage = () => {
        const search = props.location.search;
        const params = new URLSearchParams(search);
        let page = params.get('page');
        console.log(page);
        if(page){
            page = parseInt(page);
            return page;
        }
        return  1;
    }

    const navigateToPage = source => {
        const url = props.history.location.pathname + '?page=' + source.target.value;
        props.history.push(url);
    }

    return (
        <div>
            <h1>Welcome to articles page</h1>
            {props.articles.map((article, index) => {
                return (
                    <SingleArticle
                        article={article}
                        id={index}
                        key={index}
                        click={deleteHandler}
                        option="delete" />
                );
            })}
            <div className="pagination">
                <Pagination page={getPage()} totalItems={props.totalItems} navigate={navigateToPage} />
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        articles: state.articles,
        totalItems: state.totalItems
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchArticlesInit: page => dispatch(fetchArticlesInit(page)),
        deleteArticle: id => dispatch(deleteArticle(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);