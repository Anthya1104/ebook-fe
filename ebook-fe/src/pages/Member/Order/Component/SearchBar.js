import './_SearchBar_search.scss'
import main_search_left_dog from '../../images/main_search_left_dog.png'
import main_search_right_dog from '../../images/main_search_right_dog.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function SearchBar(props) {
  const { searchBar_title, searchBar_placeholder } = props
  const { titleSearch, setTitleSearch, setSearch, typeId } = props
  const typeIdParams = typeId ? typeId : 2
  const searchWordParams = titleSearch ? titleSearch : ''
  return (
    <>
      <section className="searchBar_section_main_bg mb-4">
        <div className="searchBar_main_search">
          <h4 className="searchBar_searchTitle"> {searchBar_title}</h4>
          <div className="searchBar_search">
            <input
              type="text"
              className="searchBar_searchInput"
              placeholder={searchBar_placeholder}
              maxLength={15}
              value={titleSearch}
              onChange={(e) => {
                console.log(e.target.value)
                let textValue = e.target.value.replace(/[, ]/g, '')
                setTitleSearch(textValue)
              }}
            />
            <Link
              type="submit"
              className="searchBar_searchButton"
              to={`/ec-productfilter?typeId=${typeIdParams}&searchword=${searchWordParams}`}
              onClick={() => {
                if (titleSearch === '') return setSearch('')
                setSearch(titleSearch)
              }}
            >
              <i className="searchBar_fa searchBar_fa-search">
                <AiOutlineSearch />
              </i>
            </Link>
          </div>
          <img
            className="searchBar_main_search_left_dog"
            src={main_search_left_dog}
            alt="left_dog"
          />
          <img
            className="searchBar_main_search_right_dog"
            src={main_search_right_dog}
            alt="right_dog"
          />
        </div>
      </section>
    </>
  )
}

export default SearchBar
