import React, { Component } from 'react'
import TableHeader from './tableHeader';
import TableBody from './tableBody';
const Table  = ({columns,sortColumn,onSort,data}) => {
    
    return ( 
        <table className="table">
      <TableHeader columns={columns} sortColumn={sortColumn } onSort={onSort}/>
      <TableBody data={data} columns={columns} />
      {/* <thead>
        <tr>
          <th onClick={() => this.raiseSort("title")}>Title</th>
          <th onClick={() => this.raiseSort("genre.name")}>Genre</th>
          <th onClick={() => this.raiseSort("numberInStock")}>Stock</th>
          <th onClick={() => this.raiseSort("dailyRentalRate")}>Rate</th>
          <th></th>
          <th></th>
        </tr>
      </thead> */}
      
    </table>
     );
}
 
export default Table ;