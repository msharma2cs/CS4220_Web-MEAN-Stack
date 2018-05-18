let viewModelChuckNorris = new Vue({
    // HTML template - div element id.
    el: "#jokesChuckNorris",
    
    // data used for bindings.
    data: {
        // for fetching progress bar, categories and categorised joke.
        fetching: false,
        categories: [],
        categorySelected: "",
        categoryJoke: "",
        categoryHistory: [],
        // for querying with search term.
        querying: false,
        searchQuery: "",
        searchedHistory: [],
        searchResult: "",
        searchedJokes: ""
    },

    methods: {

        // To fetch the categories from api, and to be displayed in select dropdown.
        getCategories: function() {
            let viewModel = this
            // to kick off the progress bar while the categories are being loaded.
            viewModel.fetching = true;

            // fetching categories.
            axios.get('https://api.chucknorris.io/jokes/categories', {
                headers: {
                    Accept: 'application/json'
                }
            })
            .then( (response) => {
                viewModel.categories = response.data
                // disabling fetching progress bar.
                viewModel.fetching = false;
            })
            .catch( (error) => {
                alert(error)
            })
        }, // getCategories

        // To fetch a categorised joke.
        getAJoke: function() {
            let viewModel = this;
            // to kick off the progress bar while the categorised joke is being loaded.
            viewModel.fetching = true;
            getUrl = "https://api.chucknorris.io/jokes/random";
            
            // api url based on selected category
            if(viewModel.categorySelected === "") {
                viewModel.categorySelected = "All";
            }
            // api url based on selected category
            if(viewModel.categorySelected !== 'All') {
                getUrl += '?category=' + viewModel.categorySelected;
            }
            
            // adding unique category select to history.
            if ( viewModel.categoryHistory.indexOf(viewModel.categorySelected) < 0 ) {
                viewModel.categoryHistory.push(viewModel.categorySelected)
            }

            // fetching joke...
            axios.get(getUrl, {
                headers: {
                    Accept: 'application/json'
                }
            })
            .then( (response) => {
                viewModel.categoryJoke = response.data.value
                // disabling fetching progress bar.
                viewModel.fetching = false;
            })
            .catch( (error) => {
                alert(error)
            })
        }, //getAJoke

        // To search for query term.
        getSearchResults: function() {
            let viewModel = this;

            // alert user if query term is blank.
            if ( viewModel.searchQuery == "" ) {
                alert("Invalid search query - empty")
            } else {
                // else query results...
                // to kick off the progress bar while the results are being loaded.
                viewModel.querying=true;
                // adding unique search term to history.
                if ( viewModel.searchedHistory.indexOf(viewModel.searchQuery) < 0 ){
                    viewModel.searchedHistory.push(viewModel.searchQuery)
                }

                // querying results.
                axios.get('https://api.chucknorris.io/jokes/search?query='+viewModel.searchQuery, {
                    headers: {
                        Accept: 'application/json'
                    }
                })
                .then( function(response) {
                    viewModel.searchResult=response.data.total
                    // wrapping query term with <mark> tag.
                    for ( res of response.data.result ) {
                        res.value = res.value.replace(viewModel.searchQuery, '<mark>'+viewModel.searchQuery+'</mark>')
                    }
                    viewModel.searchedJokes = response.data.result
                    // disabling querying progress abr.
                    viewModel.querying=false;
                })
                .catch((err)=>{
                    alert(err)
                })
            }
        } //getSearchResults
    },

    // initialization: getting categories on page load.
    created: function() {
        this.getCategories()
    }
})