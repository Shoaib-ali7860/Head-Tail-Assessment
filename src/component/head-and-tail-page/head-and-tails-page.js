import React, { useState } from 'react'

import WebsiteLayout from '../layout/layout'
function HeadAndTail({ model = {} }) {
  const [filterSelected, setFilterSelected] = useState('')
  const [list, setList] = useState([])
  const [err, setErr] = useState('')
  const onSubmit = () => {
    if (!filterSelected) {
      setErr('Please Select Head or Tail.')
      return
    }

    let ind = -1
    //finding the string which is going to append
    for (let i = 0; i < list.length; i++) {
      if (list[i].slice(-1) !== filterSelected && ind === -1) {
        ind = i
        break
      }
    }
    //finding the longest string
    var longest = ''
    list.forEach(function (word) {
      if (word.length > longest.length) {
        longest = word
      }
    })

    if (ind !== -1 && longest?.length - list[ind]?.length > 0) {
      list[ind] =
        list[ind] +
        [...Array(longest?.length - list[ind]?.length).keys()]
          .map((i) => '')
          ?.join(' ') +
        filterSelected
    } else if (ind === -1) {
      list.push(
        [...Array(longest?.length).keys()].map((i) => '')?.join(' ') +
          filterSelected,
      )
    } else {
      list[ind] = list[ind] + filterSelected
    }

    setList([...list])
    setFilterSelected('')
  }
  return (
    <WebsiteLayout>
      <div className="container p-3">
        <h2>Head And Tails</h2>
        <div>
          <select
            onChange={(e) => {
              setErr('')
              setFilterSelected(e.target.value)
            }}
            value={filterSelected}
            className=" p-1 mt-3 "
            style={{ minWidth: 150 }}
          >
            <option value="" disabled>
              select ...
            </option>
            <option value="H">H</option>
            <option value="T">T</option>
          </select>
          {err ? <p className="text-danger">{err}</p> : null}
        </div>
        <button className="btn btn-primary mt-2" onClick={onSubmit}>
          Submit
        </button>
        <div className="mt-4">
          {list?.map((val, ind) => (
            <div className="d-flex">
              {val?.split('')?.map((v) => (
                <p style={{ width: 15 }}>{v}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </WebsiteLayout>
  )
}

export default HeadAndTail
