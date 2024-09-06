import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    // <div className="FooterPage">
    // {/* <div><Particle/></div> */}
    
    // <div className="FooterPage-container">
    // <div className="FootPage-1">
    // <p className="FootPage-1-para-1">Other</p>
    // <p className="FootPage-1-para-2">Links</p>
    // </div>
    // <div className="FootPage-2">
    // {/* LEETCODE */}
    // <svg className="svg-lc" xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 32 32">
	  // <path fill="currentColor" d="m21.469 23.907l-3.595 3.473c-.624.625-1.484.885-2.432.885s-1.807-.26-2.432-.885l-5.776-5.812c-.62-.625-.937-1.537-.937-2.485c0-.952.317-1.812.937-2.432l5.76-5.844c.62-.619 1.5-.859 2.448-.859s1.808.26 2.432.885l3.595 3.473c.687.688 1.823.663 2.536-.052c.708-.713.735-1.848.047-2.536l-3.473-3.511a6.793 6.793 0 0 0-3.261-1.787l3.287-3.333c.688-.687.667-1.823-.047-2.536s-1.849-.735-2.536-.052L4.553 13.968c-1.307 1.312-1.989 3.113-1.989 5.113c0 1.996.683 3.86 1.989 5.168l5.797 5.812c1.307 1.307 3.115 1.937 5.115 1.937c1.995 0 3.801-.683 5.109-1.989l3.479-3.521c.688-.683.661-1.817-.052-2.531s-1.849-.74-2.531-.052zm6.28-6.558H14.218c-.932 0-1.692.801-1.692 1.791c0 .991.76 1.797 1.692 1.797h13.531c.933 0 1.693-.807 1.693-1.797c0-.989-.76-1.791-1.693-1.791" />
    // </svg>

    // {/* CODECHEF */}
    // <svg className="svg-cc" xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24">
	  // <path fill="currentColor" d="M11.257.004q-.554.014-1.1.095c-.54.054-1.08.325-1.675.595c-.757.324-1.515.649-2.218.703c-1.19.378-1.568.919-1.892 1.351c0 .054-.054.108-.054.108c-.433.865-.487 1.73-.325 2.595c.162.541.378 1.029.54 1.515c.38 1.028.758 2 .92 3.136c.163.325.324.757.432 1.19c.27.865.542 1.838 1.353 2.595l.006-.003c.017.019.03.04.048.057l.021-.01l-.02-.584c.648-.974 1.566-1.623 2.864-1.893c.52-.11 1.081-.15 1.663-.128a8.8 8.8 0 0 1 1.798.236c1.46.378 2.595 1.136 2.65 1.785c.027.354.04.695.032 1.036q-.001.096-.007.193l.136.068a.64.64 0 0 0 .206-.19l.003-.003l.006-.008c.04-.054.075-.124.11-.194c.02-.037.038-.086.056-.129c.205-.462.362-1.153.538-1.963c.054-.27.11-.487.163-.703c.433-.973 1.027-1.838 1.622-2.65c.973-1.35 1.892-2.595 1.784-4.055c-1.784-3.461-4.272-4.002-5.57-4.272c-.216-.054-.323-.054-.485-.108c-1.338-.244-2.494-.396-3.605-.365M16.3 14.383a10 10 0 0 0-.032-.983c-.054-.703-1.19-1.46-2.704-1.838a9.5 9.5 0 0 0-1.744-.236a6.8 6.8 0 0 0-1.555.128c-1.244.27-2.216.92-2.811 1.892l.051 1.431c.667-.355 1.733-.874 3.14-1c.065-.005.136-.005.204-.009c.117-.013.266-.044.444-.044c1.607 0 3.268.534 4.877 1.648q.057-.412.07-.823l.045.023c.002-.063.014-.127.015-.19zM11.256.058c.124-.004.254.01.379.011q-.345-.003-.687.016c.103-.006.205-.024.308-.027M10.44.13c-.076.009-.153.013-.229.024c-.817.117-1.774.701-2.75 1.045c.355-.132.714-.296 1.075-.45c.54-.27 1.135-.541 1.621-.595c.094-.014.189-.013.283-.024m-.229.24c.162 0 .379 0 .541.054a1 1 0 0 0-.37-.014a1.2 1.2 0 0 1 .316.068c.58 1-.426 5.279-.679 8.149a57 57 0 0 0 .463 2.72c-.703-1.784-1.406-4.921-1.515-7.354c-.054-.973.001-1.839.218-2.487C9.4.855 9.725.423 10.21.369zm3.136.27c-.81 2.11-.918 6.11-.972 7.354c-.054.54 0 1.73.054 2.595c0 .216.054.432.054.649c0-.217-.054-.379-.054-.595c-.433-3.244-.974-7.136.918-10.002m3.352.379c-.27 2.162-1.405 3.19-1.783 5.3c-.108 1.676-.325 3.622-.379 5.298c-.054-1.676 0-3.46.27-5.245c.27-1.838.865-3.677 1.892-5.353m-10.17.63a.86.86 0 0 1 .6.236l-.014-.007c.133.092.266.209.393.384c-.204.968.255 3.032.04 4.67c.076 1.548.071 3.18.849 4.459c-.98-1.51-1.176-3.437-1.322-5.236c-.113-1.09-.204-2.097-.464-2.903c-.144-.305-.269-.575-.384-.822c-.024-.037-.044-.079-.07-.114a.58.58 0 0 1-.162-.377c0-.054.053-.162.108-.162c.054-.054.161-.056.215-.11a1 1 0 0 1 .21-.018m-1.347.613c-.06.02-.092.041-.14.061c.177-.034.362.034.52.318c-.188.892.436 3.369.428 5.104c.313 1.848.55 3.85 1.572 5.115c-1.19-1.351-1.676-3.73-2.054-5.731c-.325-1.568-.596-2.92-1.136-3.352c-.054-.108-.108-.163-.108-.271c0-.162 0-.379.108-.595c-.277.634-.405 1.267-.37 1.901a3.84 3.84 0 0 1 .37-1.901c0-.054.054-.054.054-.108c.012-.016.031-.035.044-.051a.9.9 0 0 1 .226-.257c.055-.061.096-.12.159-.182c-.053.056-.088.11-.134.165c.027-.018.052-.037.084-.052a.5.5 0 0 1 .377-.164m-.377.164c-.004.007-.008.01-.012.018l.037-.03zm14.76 1.134l-.005.015c.038-.005.075-.017.113-.015c-.037-.002-.076.01-.115.02c-.863 2.642-1.887 5.284-2.911 7.926l-.002.003c-.087.465-.234.884-.54 1.19c.433-.487.486-1.191.54-2.056c.054-.811.054-1.676.487-2.542c0-.053.001-.105.053-.159l.001-.002c.097-.353.202-.689.317-1.018c.418-1.29 1.14-3.166 2.013-3.34c.016-.006.034-.019.05-.022M8.374 16.21l-.324.108c.162.217.27.38.378.433a.8.8 0 0 0 .379.108c.054 0 .161 0 .215-.054l.812-.27c.054 0 .108-.054.162-.054c.108 0 .162 0 .27.054l.271.27l.27-.054c-.108-.162-.27-.323-.378-.377s-.217-.11-.379-.11h-.108l-.866.325h-.161c-.109 0-.216 0-.27-.054s-.163-.162-.271-.325m-2.596.541c-.27.162-.649.433-1.19.649s-.973.433-1.19.649q-.323.324-.323.649c0 .108.054.163.162.217c.054.054.163.054.217.108a28 28 0 0 1 2.216 1.08c.109.054.217.163.272.217c.054.054.107.054.161.054c.109 0 .27-.053.378-.162q.162-.162.163-.325c0-.108-.055-.161-.163-.215c0 0-.433-.217-1.19-.541a12 12 0 0 1-1.188-.595c.162-.27.486-.487.973-.703c.54-.216.92-.433 1.081-.595c.054-.054.054-.108.054-.162a.4.4 0 0 0-.108-.217a.42.42 0 0 0-.27-.108zm11.247 0a.4.4 0 0 0-.216.108c-.054.108-.109.163-.109.217v.054c.162.162.38.27.704.378c.27.054.54.163.811.217q.486.162.649.486v.055c0 .054-.109.162-.325.27c-.108.054-.325.217-.595.433c-.27.162-.433.323-.595.377c-.216.109-.378.217-.432.326c-.054.054-.054.107-.054.161c0 .108.054.108.108.216s.162.11.216.11s.108-.056.162-.056c.27-.162.65-.378 1.082-.757c.486-.378.865-.648 1.082-.81c.216-.108.323-.217.323-.38c0-.053 0-.161-.108-.215c-.378-.433-.918-.702-1.567-.919c-.108-.054-.27-.109-.595-.163c-.162-.054-.325-.108-.433-.108zm-2.974.81c-.27 0-.487.056-.649.218c-.216.162-.27.432-.216.757c0 .27.108.486.27.703s.379.325.595.325c.162 0 .27-.056.433-.11c.27-.162.379-.432.379-.918c0-.379-.109-.649-.271-.81a.9.9 0 0 0-.541-.164zm-4.488.055c-.27 0-.486.055-.648.217c-.217.162-.27.432-.216.757c0 .27.107.486.27.702s.378.326.594.326c.163 0 .271-.056.433-.11c.27-.162.378-.432.378-.918c0-.433-.108-.703-.27-.81a.9.9 0 0 0-.54-.164zm0 .65c.163 0 .271.108.271.27s-.163.27-.27.27c-.163 0-.27-.108-.27-.27s.107-.27.27-.27m4.38.054c.162 0 .271.107.271.27c0 .108-.109.27-.27.27c-.163 0-.27-.108-.27-.27s.107-.27.27-.27m-2.703 2.108l.162.324a1 1 0 0 0 .216.271c.054.054.163.162.27.162h.109c.108 0 .161 0 .215-.054s.164-.054.218-.108l.161-.162c.054-.054.108-.109.108-.163c.054-.054.054-.108.108-.162c0-.054.054-.108.054-.108c-.054.108-.162.216-.216.324c-.108.054-.161.163-.27.163c-.107.054-.216.054-.324.054s-.216 0-.27-.054c-.108 0-.163-.054-.217-.108l-.162-.163c-.054-.054-.108-.162-.162-.216m-.866 1.028c-1.136 0-1.838 1.514-3.46.162c-.432 2.65 2.758 2.866 4.11 1.73c.92-.81.648-1.946-.65-1.892m2.866 0c-1.297-.054-1.568 1.082-.648 1.893c1.351 1.135 4.54.918 4.108-1.731c-1.622 1.352-2.27-.162-3.46-.162" />
    // </svg>

    // {/* GEEK FOR GEEKS */}
    // <svg className="svg-gfg" xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24">
	  // <path fill="currentColor" d="M21.45 14.315c-.143.28-.334.532-.565.745a3.7 3.7 0 0 1-1.104.695a4.5 4.5 0 0 1-3.116-.016a3.8 3.8 0 0 1-2.135-2.078a4 4 0 0 1-.13-.353h7.418a4.3 4.3 0 0 1-.368 1.008zm-11.99-.654a3.8 3.8 0 0 1-2.134 2.078a4.5 4.5 0 0 1-3.117.016a3.7 3.7 0 0 1-1.104-.695a2.7 2.7 0 0 1-.564-.745a4.2 4.2 0 0 1-.368-1.006H9.59q-.056.18-.13.352m14.501-1.758a4 4 0 0 0-.082-.475l-9.634-.008a3.93 3.93 0 0 1 1.143-2.348c.363-.35.79-.625 1.26-.809a3.97 3.97 0 0 1 4.484.957l1.521-1.49a5.7 5.7 0 0 0-1.922-1.357a6.3 6.3 0 0 0-2.544-.49a6.4 6.4 0 0 0-2.405.457a6 6 0 0 0-1.963 1.276a6.1 6.1 0 0 0-1.325 1.94a5.9 5.9 0 0 0-.466 1.864h-.063a5.9 5.9 0 0 0-.467-1.865a6.1 6.1 0 0 0-1.325-1.939A6 6 0 0 0 8.21 6.34a6.7 6.7 0 0 0-4.949.031A5.7 5.7 0 0 0 1.34 7.73l1.52 1.49a4.17 4.17 0 0 1 4.484-.958c.47.184.898.46 1.26.81c.368.36.66.792.859 1.268c.146.344.242.708.285 1.08l-9.635.008A4.7 4.7 0 0 0 0 12.457a6.5 6.5 0 0 0 .345 2.127a4.9 4.9 0 0 0 1.08 1.783c.528.56 1.17 1 1.88 1.293a6.5 6.5 0 0 0 2.504.457c.824.005 1.64-.15 2.404-.457a6 6 0 0 0 1.964-1.277a6.1 6.1 0 0 0 1.686-3.076h.273a6.13 6.13 0 0 0 1.686 3.077a6 6 0 0 0 1.964 1.276a6.4 6.4 0 0 0 2.405.457a6.5 6.5 0 0 0 2.502-.457a5.4 5.4 0 0 0 1.882-1.293a4.9 4.9 0 0 0 1.08-1.783A6.5 6.5 0 0 0 24 12.457a5 5 0 0 0-.039-.554" />
    // </svg>

    // </div>
    // <div className="FootPage-3">
    // <form>
    //   <input type="text"></input>
    //   <svg className="svg-search" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24">
	  //   <path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14" />
    //   </svg>
    // </form>
    // </div>
    // </div>
    // </div>
    <>
      <div className='FooterPage'>
      <div className='FooterPageContainer-up'>
      <div className='FooterPage-left'>
        <h1>OTHER</h1>
        <h2>LINKS</h2>
      </div>
      <div className='FooterPage-right'>
        {/* LEETCODE */}
     <svg className="svg-lc" xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 40 40">
	   <path fill="currentColor" d="m21.469 23.907l-3.595 3.473c-.624.625-1.484.885-2.432.885s-1.807-.26-2.432-.885l-5.776-5.812c-.62-.625-.937-1.537-.937-2.485c0-.952.317-1.812.937-2.432l5.76-5.844c.62-.619 1.5-.859 2.448-.859s1.808.26 2.432.885l3.595 3.473c.687.688 1.823.663 2.536-.052c.708-.713.735-1.848.047-2.536l-3.473-3.511a6.793 6.793 0 0 0-3.261-1.787l3.287-3.333c.688-.687.667-1.823-.047-2.536s-1.849-.735-2.536-.052L4.553 13.968c-1.307 1.312-1.989 3.113-1.989 5.113c0 1.996.683 3.86 1.989 5.168l5.797 5.812c1.307 1.307 3.115 1.937 5.115 1.937c1.995 0 3.801-.683 5.109-1.989l3.479-3.521c.688-.683.661-1.817-.052-2.531s-1.849-.74-2.531-.052zm6.28-6.558H14.218c-.932 0-1.692.801-1.692 1.791c0 .991.76 1.797 1.692 1.797h13.531c.933 0 1.693-.807 1.693-1.797c0-.989-.76-1.791-1.693-1.791" />
    </svg>

    {/* CODECHEF */}
     <svg className="svg-cc" xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 25 25">
	   <path fill="currentColor" d="M11.257.004q-.554.014-1.1.095c-.54.054-1.08.325-1.675.595c-.757.324-1.515.649-2.218.703c-1.19.378-1.568.919-1.892 1.351c0 .054-.054.108-.054.108c-.433.865-.487 1.73-.325 2.595c.162.541.378 1.029.54 1.515c.38 1.028.758 2 .92 3.136c.163.325.324.757.432 1.19c.27.865.542 1.838 1.353 2.595l.006-.003c.017.019.03.04.048.057l.021-.01l-.02-.584c.648-.974 1.566-1.623 2.864-1.893c.52-.11 1.081-.15 1.663-.128a8.8 8.8 0 0 1 1.798.236c1.46.378 2.595 1.136 2.65 1.785c.027.354.04.695.032 1.036q-.001.096-.007.193l.136.068a.64.64 0 0 0 .206-.19l.003-.003l.006-.008c.04-.054.075-.124.11-.194c.02-.037.038-.086.056-.129c.205-.462.362-1.153.538-1.963c.054-.27.11-.487.163-.703c.433-.973 1.027-1.838 1.622-2.65c.973-1.35 1.892-2.595 1.784-4.055c-1.784-3.461-4.272-4.002-5.57-4.272c-.216-.054-.323-.054-.485-.108c-1.338-.244-2.494-.396-3.605-.365M16.3 14.383a10 10 0 0 0-.032-.983c-.054-.703-1.19-1.46-2.704-1.838a9.5 9.5 0 0 0-1.744-.236a6.8 6.8 0 0 0-1.555.128c-1.244.27-2.216.92-2.811 1.892l.051 1.431c.667-.355 1.733-.874 3.14-1c.065-.005.136-.005.204-.009c.117-.013.266-.044.444-.044c1.607 0 3.268.534 4.877 1.648q.057-.412.07-.823l.045.023c.002-.063.014-.127.015-.19zM11.256.058c.124-.004.254.01.379.011q-.345-.003-.687.016c.103-.006.205-.024.308-.027M10.44.13c-.076.009-.153.013-.229.024c-.817.117-1.774.701-2.75 1.045c.355-.132.714-.296 1.075-.45c.54-.27 1.135-.541 1.621-.595c.094-.014.189-.013.283-.024m-.229.24c.162 0 .379 0 .541.054a1 1 0 0 0-.37-.014a1.2 1.2 0 0 1 .316.068c.58 1-.426 5.279-.679 8.149a57 57 0 0 0 .463 2.72c-.703-1.784-1.406-4.921-1.515-7.354c-.054-.973.001-1.839.218-2.487C9.4.855 9.725.423 10.21.369zm3.136.27c-.81 2.11-.918 6.11-.972 7.354c-.054.54 0 1.73.054 2.595c0 .216.054.432.054.649c0-.217-.054-.379-.054-.595c-.433-3.244-.974-7.136.918-10.002m3.352.379c-.27 2.162-1.405 3.19-1.783 5.3c-.108 1.676-.325 3.622-.379 5.298c-.054-1.676 0-3.46.27-5.245c.27-1.838.865-3.677 1.892-5.353m-10.17.63a.86.86 0 0 1 .6.236l-.014-.007c.133.092.266.209.393.384c-.204.968.255 3.032.04 4.67c.076 1.548.071 3.18.849 4.459c-.98-1.51-1.176-3.437-1.322-5.236c-.113-1.09-.204-2.097-.464-2.903c-.144-.305-.269-.575-.384-.822c-.024-.037-.044-.079-.07-.114a.58.58 0 0 1-.162-.377c0-.054.053-.162.108-.162c.054-.054.161-.056.215-.11a1 1 0 0 1 .21-.018m-1.347.613c-.06.02-.092.041-.14.061c.177-.034.362.034.52.318c-.188.892.436 3.369.428 5.104c.313 1.848.55 3.85 1.572 5.115c-1.19-1.351-1.676-3.73-2.054-5.731c-.325-1.568-.596-2.92-1.136-3.352c-.054-.108-.108-.163-.108-.271c0-.162 0-.379.108-.595c-.277.634-.405 1.267-.37 1.901a3.84 3.84 0 0 1 .37-1.901c0-.054.054-.054.054-.108c.012-.016.031-.035.044-.051a.9.9 0 0 1 .226-.257c.055-.061.096-.12.159-.182c-.053.056-.088.11-.134.165c.027-.018.052-.037.084-.052a.5.5 0 0 1 .377-.164m-.377.164c-.004.007-.008.01-.012.018l.037-.03zm14.76 1.134l-.005.015c.038-.005.075-.017.113-.015c-.037-.002-.076.01-.115.02c-.863 2.642-1.887 5.284-2.911 7.926l-.002.003c-.087.465-.234.884-.54 1.19c.433-.487.486-1.191.54-2.056c.054-.811.054-1.676.487-2.542c0-.053.001-.105.053-.159l.001-.002c.097-.353.202-.689.317-1.018c.418-1.29 1.14-3.166 2.013-3.34c.016-.006.034-.019.05-.022M8.374 16.21l-.324.108c.162.217.27.38.378.433a.8.8 0 0 0 .379.108c.054 0 .161 0 .215-.054l.812-.27c.054 0 .108-.054.162-.054c.108 0 .162 0 .27.054l.271.27l.27-.054c-.108-.162-.27-.323-.378-.377s-.217-.11-.379-.11h-.108l-.866.325h-.161c-.109 0-.216 0-.27-.054s-.163-.162-.271-.325m-2.596.541c-.27.162-.649.433-1.19.649s-.973.433-1.19.649q-.323.324-.323.649c0 .108.054.163.162.217c.054.054.163.054.217.108a28 28 0 0 1 2.216 1.08c.109.054.217.163.272.217c.054.054.107.054.161.054c.109 0 .27-.053.378-.162q.162-.162.163-.325c0-.108-.055-.161-.163-.215c0 0-.433-.217-1.19-.541a12 12 0 0 1-1.188-.595c.162-.27.486-.487.973-.703c.54-.216.92-.433 1.081-.595c.054-.054.054-.108.054-.162a.4.4 0 0 0-.108-.217a.42.42 0 0 0-.27-.108zm11.247 0a.4.4 0 0 0-.216.108c-.054.108-.109.163-.109.217v.054c.162.162.38.27.704.378c.27.054.54.163.811.217q.486.162.649.486v.055c0 .054-.109.162-.325.27c-.108.054-.325.217-.595.433c-.27.162-.433.323-.595.377c-.216.109-.378.217-.432.326c-.054.054-.054.107-.054.161c0 .108.054.108.108.216s.162.11.216.11s.108-.056.162-.056c.27-.162.65-.378 1.082-.757c.486-.378.865-.648 1.082-.81c.216-.108.323-.217.323-.38c0-.053 0-.161-.108-.215c-.378-.433-.918-.702-1.567-.919c-.108-.054-.27-.109-.595-.163c-.162-.054-.325-.108-.433-.108zm-2.974.81c-.27 0-.487.056-.649.218c-.216.162-.27.432-.216.757c0 .27.108.486.27.703s.379.325.595.325c.162 0 .27-.056.433-.11c.27-.162.379-.432.379-.918c0-.379-.109-.649-.271-.81a.9.9 0 0 0-.541-.164zm-4.488.055c-.27 0-.486.055-.648.217c-.217.162-.27.432-.216.757c0 .27.107.486.27.702s.378.326.594.326c.163 0 .271-.056.433-.11c.27-.162.378-.432.378-.918c0-.433-.108-.703-.27-.81a.9.9 0 0 0-.54-.164zm0 .65c.163 0 .271.108.271.27s-.163.27-.27.27c-.163 0-.27-.108-.27-.27s.107-.27.27-.27m4.38.054c.162 0 .271.107.271.27c0 .108-.109.27-.27.27c-.163 0-.27-.108-.27-.27s.107-.27.27-.27m-2.703 2.108l.162.324a1 1 0 0 0 .216.271c.054.054.163.162.27.162h.109c.108 0 .161 0 .215-.054s.164-.054.218-.108l.161-.162c.054-.054.108-.109.108-.163c.054-.054.054-.108.108-.162c0-.054.054-.108.054-.108c-.054.108-.162.216-.216.324c-.108.054-.161.163-.27.163c-.107.054-.216.054-.324.054s-.216 0-.27-.054c-.108 0-.163-.054-.217-.108l-.162-.163c-.054-.054-.108-.162-.162-.216m-.866 1.028c-1.136 0-1.838 1.514-3.46.162c-.432 2.65 2.758 2.866 4.11 1.73c.92-.81.648-1.946-.65-1.892m2.866 0c-1.297-.054-1.568 1.082-.648 1.893c1.351 1.135 4.54.918 4.108-1.731c-1.622 1.352-2.27-.162-3.46-.162" />
     </svg>

     {/* GEEK FOR GEEKS */}
     <svg className="svg-gfg" xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24">
	   <path fill="currentColor" d="M21.45 14.315c-.143.28-.334.532-.565.745a3.7 3.7 0 0 1-1.104.695a4.5 4.5 0 0 1-3.116-.016a3.8 3.8 0 0 1-2.135-2.078a4 4 0 0 1-.13-.353h7.418a4.3 4.3 0 0 1-.368 1.008zm-11.99-.654a3.8 3.8 0 0 1-2.134 2.078a4.5 4.5 0 0 1-3.117.016a3.7 3.7 0 0 1-1.104-.695a2.7 2.7 0 0 1-.564-.745a4.2 4.2 0 0 1-.368-1.006H9.59q-.056.18-.13.352m14.501-1.758a4 4 0 0 0-.082-.475l-9.634-.008a3.93 3.93 0 0 1 1.143-2.348c.363-.35.79-.625 1.26-.809a3.97 3.97 0 0 1 4.484.957l1.521-1.49a5.7 5.7 0 0 0-1.922-1.357a6.3 6.3 0 0 0-2.544-.49a6.4 6.4 0 0 0-2.405.457a6 6 0 0 0-1.963 1.276a6.1 6.1 0 0 0-1.325 1.94a5.9 5.9 0 0 0-.466 1.864h-.063a5.9 5.9 0 0 0-.467-1.865a6.1 6.1 0 0 0-1.325-1.939A6 6 0 0 0 8.21 6.34a6.7 6.7 0 0 0-4.949.031A5.7 5.7 0 0 0 1.34 7.73l1.52 1.49a4.17 4.17 0 0 1 4.484-.958c.47.184.898.46 1.26.81c.368.36.66.792.859 1.268c.146.344.242.708.285 1.08l-9.635.008A4.7 4.7 0 0 0 0 12.457a6.5 6.5 0 0 0 .345 2.127a4.9 4.9 0 0 0 1.08 1.783c.528.56 1.17 1 1.88 1.293a6.5 6.5 0 0 0 2.504.457c.824.005 1.64-.15 2.404-.457a6 6 0 0 0 1.964-1.277a6.1 6.1 0 0 0 1.686-3.076h.273a6.13 6.13 0 0 0 1.686 3.077a6 6 0 0 0 1.964 1.276a6.4 6.4 0 0 0 2.405.457a6.5 6.5 0 0 0 2.502-.457a5.4 5.4 0 0 0 1.882-1.293a4.9 4.9 0 0 0 1.08-1.783A6.5 6.5 0 0 0 24 12.457a5 5 0 0 0-.039-.554" />
     </svg>
      </div>
      </div>
      <div className='FooterPageConatiner-down'>
        <h2>Made with 💖 </h2>
        <h4>by Hardik Sharma</h4>
      </div>
      </div>
    </>
  )
}

export default Footer