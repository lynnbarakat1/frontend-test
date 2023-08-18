import Image from "next/image"
import Link from "next/link";
import { useState } from "react"

export default function Layout(props) {

    const [options] = useState([
        {
            title: 'All',
        },
        {
            title: 'Songs',
        },
        {
            title: 'Photos',
        },
        {
            title: 'SFX',
        },
    ])

    const [dropdown, setDropdown] = useState(null);
    const [profileDropdown, setProfileDropdown] = useState(null);
    const [mobileMenu, setMobileMenu] = useState(null);

    return (
        <>
            <div className="nav-bar py-2">
                <div className="container-fluid">
                    <div className="row px-lg-3 align-items-center">
                        <div className="col d-flex align-items-center">
                            <div className="burger d-lg-none d-block me-2 cursor" onClick={() => setMobileMenu(true)}>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <h5 className="text-white mb-0" >Logo</h5>
                        </div>
                        <div className="col-auto d-flex align-items-center ">
                            <div className="position-relative me-3 d-lg-flex d-none">
                                <input className="search-input" type="text" placeholder="Search" />
                                <div className="search-icon d-flex flex-column justify-content-center">
                                    <Image src='/images/search.svg' width={25} height={25} />
                                </div>
                                <div className="dropdown-input">
                                    <div className="d-flex align-items-center cursor" onClick={() => setDropdown(!dropdown)}>
                                        <p className="mb-0 me-2 ">Songs</p>
                                        <Image src='/images/arrow.svg' width={20} height={20} />
                                    </div>
                                    <div className={"dropdown-header-items shadow" + (dropdown ? ' ' : " hide")}>
                                        {options.map(option =>
                                            <div className="dropdown-items text-center">
                                                <p className="mb-0">{option.title}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="me-3 d-lg-flex d-none">
                                <Link className="text-white menu-links" href="/404">
                                    Discover
                                </Link>
                            </div>
                            <div className="me-3 d-lg-flex d-none">
                                <Link className="text-white menu-links" href="/songs">
                                    songs
                                </Link>
                            </div>
                            <div className="me-3 d-lg-flex d-none">
                                <Link className="text-white menu-links" href="/playlist">
                                    Playlist
                                </Link>
                            </div>
                            <div className="me-lg-3 ">
                                <button className="button">Upgrade Plan</button>
                            </div>
                            <div className="position-relative ">
                                <div className="d-flex align-items-center border-dropdown cursor " onClick={() => setProfileDropdown(!profileDropdown)}>
                                    <div className="me-lg-2">
                                        <Image className="cirle-img" src="/images/dummy.jpeg" width={40} height={40} />
                                    </div>
                                    <div className="text-center d-lg-block d-none">
                                        <p className="text-white mb-0">Name</p>
                                        <p className="text-white mb-0 subscribers-num">Subscribers numbers</p>
                                    </div>
                                </div>
                                <div className={"shadow black-bg position-absolute" + (profileDropdown ? ' ' : ' hide')}>
                                    <Image className="cirle-img" src="/images/dummy.jpeg" width={80} height={80} />
                                    <div className="d-flex align-items-center">
                                        <div className="text-white mb-2">View Profile</div>
                                        <Image className="mb-2" src="/images/view.svg" width={10} height={10} />
                                    </div>
                                    <div className="text-center">
                                        <button className="btn-switch">Switch Project</button>
                                    </div>
                                    <hr />
                                    <div className="d-flex align-items-center">
                                        <p className="me-2">✅</p>
                                        <p className="text-white">Licenses & Downloads</p>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <svg className="me-2" aria-hidden="true" focusable="false" data-prefix="far" data-icon="bookmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#fff" d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z" ></path></svg>
                                        <p className="text-white mb-0">My Playlist</p>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <svg className="me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cog" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#fff" d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" ></path></svg>
                                        <p className="text-white mb-0">Setting</p>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <svg className="me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sign-out-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#fff" d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z" ></path></svg>
                                        <p className="text-white mb-0">Logout</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"mobile-menu " + (mobileMenu ? ' ' : " hide")}>
                <div className="close-icon cursor" >
                    <svg onClick={() => setMobileMenu(false)} className="position-absolute" width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 30L0 27L12 15L0 3L3 0L15 12L27 0L30 3L18 15L30 27L27 30L15 18L3 30Z" fill="white"></path></svg>
                </div>
                <div className="d-flex flex-column align-items-center pt-5 mt-3">
                    <h5 className="text-white mb-4" >Logo</h5>
                    <div className="d-flex align-items-center social-icons mb-4">
                        <div className=" mx-2">
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#fff" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" ></path></svg>
                        </div>
                        <div className=" mx-2">
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="spotify" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" ><path fill="#fff" d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z" ></path></svg>
                        </div>
                        <div className=" mx-2">
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#fff" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
                        </div>
                        <div className=" mx-2">
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><path fill="#fff" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" ></path></svg>
                        </div>
                        <div className=" mx-2">
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" ><path fill="#fff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" ></path></svg>
                        </div>
                        <div className=" mx-2">
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="tiktok" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#fff" d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" ></path></svg>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-4 col-sm-6 col-8">
                        <div className="position-relative ">
                            <input className="search-input w-100" type="text" placeholder="Search" />
                            <div className="search-icon d-flex flex-column justify-content-center">
                                <Image src='/images/search.svg' width={25} height={25} />
                            </div>
                            <div className="dropdown-input">
                                <div className="d-flex align-items-center cursor" onClick={() => setDropdown(!dropdown)}>
                                    <p className="mb-0 me-2 ">Songs</p>
                                    <Image src='/images/arrow.svg' width={20} height={20} />
                                </div>
                                <div className={"dropdown-header-items shadow" + (dropdown ? ' ' : " hide")}>
                                    {options.map(option =>
                                        <div className="dropdown-items text-center">
                                            <p className="mb-0">{option.title}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center pt-3">
                    <Link className="text-white menu-links" href="/404">
                        Discover
                    </Link>
                </div>
                <hr className="seperator" />
                <div className="text-center">
                    <Link className="text-white menu-links" href="/songs">
                        songs
                    </Link>
                </div>
                <hr className="seperator" />
                <div className="text-center">
                    <Link className="text-white menu-links" href="/playlist">
                        Playlist
                    </Link>
                </div>
            </div>
        </>
    )
} 