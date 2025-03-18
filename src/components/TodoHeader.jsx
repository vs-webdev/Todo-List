import './TodoHeader.css'
import { MdOutlineDarkMode } from "react-icons/md";
import { CgSun } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa";
import { useEffect, useRef, useState } from 'react';
import { useTask } from "../contexts/TaskProvider";

const TodoHeader = () => {
  const {sortOption, setSortOption, search, setSearch} = useTask()
  const options = ['All', 'Complete', 'Incomplete']
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

  const handleOptionClick = (option) => {
    setSortOption(option)
  }

  return (
    <div className='todo-header'>
      <input type="text" className='search' placeholder='Search note...'
        onChange={e => setSearch(e.target.value)}
        value={search}
      />
      <div className="sort-container" ref={dropdownRef} onClick={() => SetIsDropDown(prev => !prev)}>
        <div className="sort-details">
          <span>{sortOption}</span>
          <div className='angledown'><FaAngleDown /></div>
        </div>

        {isDropdownOpen &&
          <ul className="options">
            {options.map((option, index) => 
            <li className='opt' key={index} onClick={() => handleOptionClick(option)}>
              <span>{option}</span>
            </li>)}
          </ul>}

      </div>
      <button className='theme-btn'><MdOutlineDarkMode size={23} /></button>
    </div>
  )
}

export default TodoHeader
