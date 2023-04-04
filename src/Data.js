import React from 'react'
import './dataCss.css'

function Data() {
  return (
    <div className="data_table">
      <table className="data_table">
        <thead>
          <tr className="data_tr">
            <th className="data_th">Item Name</th>
            <th className="data_th">HSN Range</th>
            <th className="data_th">GST Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr className="data_tr">
            <td className="data_td">
              <strong>Vegetables</strong>
            </td>
            <td className="data_td">0701 to 0714</td>
            <td className="data_td"> 0%</td>
          </tr>
          <tr className="data_tr">
            <td className="data_td">
              <strong>Fruits</strong>
            </td>
            <td className="data_td">0801 to 0814</td>
            <td className="data_td">0%</td>
          </tr>
          <tr className="data_tr">
            <td className="data_td">
              <strong>Processed Foods</strong>
            </td>
            <td className="data_td">2001 to 2009</td>
            <td className="data_td">5%</td>
          </tr>
          <tr className="data_tr">
            <td className="data_td">
              <strong>Textiles</strong>
            </td>
            <td className="data_td"> 50 to 63</td>
            <td className="data_td">5% to 12%</td>
          </tr>
          <tr className="data_tr">
            <td className="data_td">
              <strong>Electronic</strong>
            </td>
            <td className="data_td"> 84</td>
            <td className="data_td">18%</td>
          </tr>
          <tr className="data_tr">
            <td className="data_td">
              <strong>Furniture</strong>
            </td>
            <td className="data_td">9401 to 9404</td>
            <td className="data_td">18%</td>
          </tr>
          <tr className="data_tr">
            <td className="data_td">
              <strong>Cars</strong>
            </td>
            <td className="data_td">8703</td>
            <td className="data_td">28%</td>
          </tr>
          <tr className="data_tr">
            <td className="data_td">
              <strong>Gold and Silver</strong>
            </td>
            <td className="data_td"> 7108, 7113</td>
            <td className="data_td">3%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Data