import './TodoHeader.css'
import { MdOutlineDarkMode } from "react-icons/md";
import { CgSun } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa";
import { useEffect, useRef, useState } from 'react';
import { useTask } from "../contexts/TaskProvider";
import { useTheme } from '../contexts/ThemeProvider';

const TodoHeader = () => {
  const {filterOption, setFilterOption, search, setSearch} = useTask()
  const {theme, setTheme} = useTheme()
  const filterOptions = ['All', 'Complete', 'Incomplete']
  const [isDropdownOpen, SetIsDropDown] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropdownRef.current.contains(e.target)){
        SetIsDropDown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className='todo-header'>
      <input type="text" className='search' placeholder='Search note...'
        onChange={e => setSearch(e.target.value)}
        value={search}
      />
      <div className="filter-container" ref={dropdownRef} onClick={() => SetIsDropDown(prev => !prev)}>
        <div className="filter-details">
          <span>{filterOption}</span>
          <div className='angledown'><FaAngleDown /></div>
        </div>

        {isDropdownOpen &&
          <ul className="options">
            {filterOptions.map((option, index) => 
            <li className='opt' key={index} onClick={() => setFilterOption(option)}>
              <span>{option}</span>
            </li>)}
          </ul>}

      </div>
      <button className='theme-btn' onClick={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}>
        {theme === 'dark'
        ? <MdOutlineDarkMode size={23} />
        : <CgSun size={23} />
      }
      </button>
    </div>
  )
}

export default TodoHeader
