import Image from "next/image";
import Layout from "../components/Layout";
import { useState } from "react";

export default function Home(props) {

  const [descriptionPopup, setDescriptionPopup] = useState(null);

  const data = props.data;

  return (
    <>
      <Layout />
      <div className="bg py-2" style={{ backgroundImage: 'url(/images/bg.png)' }}>
        <div className="container">
          <div className="card-item shadow my-5">
            <div className="row p-3">
              <div className="col-lg-3 col-md-5 pb-md-0 pb-4">
                <div className="ratio ratio-1x1 ">
                  <Image className="rounded shadow" src="/images/dummy.jpeg" width={300} height={300} />
                </div>
              </div>
              <div className="col">
                <div className="d-flex">
                  <div className="flex-grow-1">
                    <p className="mb-2">PLAYLIST</p>
                    <h3 className="fw-bold">Test Play</h3>
                  </div>
                  <div>
                    <button className="share-button shadow">Share</button>
                  </div>
                </div>
                <p>17 songs</p>
                <p className="mb-2 fst-italic">This Test Playt playlist from premium creator features the best copyright-free songs for ️ YouTube videos, social media, and podcasts.`</p>
                <p className="blue-text cursor" onClick={() => setDescriptionPopup(true)}>Add Description</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <table class="table table-hover table-custom">
          <thead>
            <tr>
              <td scope="col">
                <p className="fst-italic mb-0 ">Song/Artist</p>
              </td>
              <td scope="col">
                <p className="fst-italic mb-0">Length</p>
              </td>
              <td scope="col">
                <p className="fst-italic mb-0">Playlist</p>
              </td>
              <td scope="col">
                <p className="fst-italic mb-0">Download</p>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">
                <div className="d-flex">
                  <div className="me-2">
                    <Image className="rounded shadow" src="/images/dummy.jpeg" width={80} height={80} />
                  </div>
                  <div>
                    <h6 className="mb-0">song</h6>
                    <p>name</p>
                  </div>
                </div>
              </td>
              <td>time</td>
              <td>Remove</td>
              <td>Download</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={"popup " + (descriptionPopup ? " " : " hide")}>
        <div className='row h-100 flex-column d-flex justify-content-center align-items-center'>
          <div className='col-lg-7 col-md-8 col-sm-10 col-10'>
            <div className='white-bg p-3 position-relative'>
              <div className=' position-absolute close text-end' onClick={() => setDescriptionPopup(null)}>
                <p className="cursor">x</p>
              </div>
              <div className='py-3'>
                <label className="mb-2 fw-bold">Description</label>
                <textarea
                  className="w-100 description-input" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
