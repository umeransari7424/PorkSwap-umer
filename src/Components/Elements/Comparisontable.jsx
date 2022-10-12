import React from "react";
import {BsCheckLg} from "react-icons/bs";
import {ImCancelCircle} from "react-icons/im";
import {
  MDBContainer,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";

function Comparisontable() {
  return (
    <div className="comparison-bg">
        <div className="text-center py-4">
            <h1>Comparison Table</h1><br />
            <h4>We are building whole ecosystem tools for future identities and data.</h4>
        </div>
      <MDBContainer className="container py-5">
        <MDBTable
          responsive
          striped
          className=" text-successtable-border border-light"
        >
          <MDBTableHead className="border-light">
            <tr>
              <th scope="col"></th>
              <th scope="col ">
                <img className="img-fluid" width={"140px"} src="Assets/uniswap.png" alt="uniswap" />
              </th>
              <th scope="col">
              <img className="img-fluid" width={"140px"} src="Assets/pancakeswap.png" alt="uniswap" />
              </th>
              
              <th scope="col">
              <img className="img-fluid" width={"140px"} src="Assets/logo.png" alt="uniswap" />
              </th>
              
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            <tr>
                
              <th scope="row">Automated Market Maker </th>
              <td>
                <BsCheckLg fas icon="check" className="text-success" />
              </td>
              <td>
                <BsCheckLg fas icon="check" className="text-success" />
              </td>
              <td>
                <BsCheckLg fas icon="check" className="text-success" />
              </td>
            </tr>
            <tr>
                
              <th scope="row">Spot Trading</th>
              <td>
                <BsCheckLg fas icon="check" className="text-success" />
              </td>
              <td>
                <BsCheckLg fas icon="check" className="text-success" />
              </td>
              <td>
                <BsCheckLg fas icon="check" className="text-success" />
              </td>
            </tr>
            <tr>
                
              <th scope="row">Futures Trading </th>
              <td>
                <ImCancelCircle fas icon="check" className="text-danger" />
              </td>
              <td>
                <ImCancelCircle fas icon="times" className="text-danger" />
              </td>
              <td>
                <BsCheckLg fas icon="times" className="text-success" />
              </td>
            </tr>
            <tr>
                
              <th scope="row">Governance</th>
              <td>
                <BsCheckLg fas icon="check" className="text-success" />
              </td>
              <td>
                <BsCheckLg fas icon="times" className="text-success" />
              </td>
              <td>
                <BsCheckLg fas icon="times" className="text-success" />
              </td>
            </tr>
            <tr>
                
              <th scope="row">Leveraged Trading</th>
              <td>
                <ImCancelCircle fas icon="check" className="text-danger" />
              </td>
              <td>
                <ImCancelCircle fas icon="times" className="text-danger" />
              </td>
              <td>
                <BsCheckLg fas icon="times" className="text-success" />
              </td>
            </tr>
            <tr>
              <th scope="row">Gas Fees</th>
              <td>
                <BsCheckLg fas icon="check" className="text-success" />
              </td>
              <td>
                <BsCheckLg fas icon="check" className="text-success" />
              </td>
              <td>
                <BsCheckLg fas icon="check" className="text-success" />
              </td>
            </tr>
            <tr>
              <th scope="row">Inflationary</th>
              <td>
                <BsCheckLg fas icon="check" className="text-danger" />
              </td>
              <td>
                <BsCheckLg fas icon="times" className="text-danger" />
              </td>
              <td>
                <BsCheckLg fas icon="times" className="text-success" />
              </td>
            </tr>
            <tr>
              <th scope="row">Deflationary</th>
              <td>
                <ImCancelCircle fas icon="check" className="text-danger" />
              </td>
              <td>
                <ImCancelCircle fas icon="check" className="text-danger" />
              </td>
              <td>
                <BsCheckLg fas icon="check" className="text-success" />
              </td>
            </tr>
            <tr>
              <th scope="row">Fixed Supply</th>
              <td>
                <BsCheckLg fas icon="check" className="text-success" />
              </td>
              <td>
                <ImCancelCircle fas icon="times" className="text-danger" />
              </td>
              <td>
                <BsCheckLg fas icon="times" className="text-success" />
              </td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      </MDBContainer>
    </div>
  );
}

export default Comparisontable;
