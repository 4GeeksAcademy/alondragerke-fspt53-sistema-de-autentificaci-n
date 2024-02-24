import React from "react";
import "/workspaces/alondragerke-fspt53-sistema-de-autentificaci-n/src/front/js/pages/notfound/notfound.css";

const NotFound = () => {

	return (
        <div id='oopss'>
        <div id='error-text'>
            <img src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="404" />
            <span>404 PAGE</span>
            <p className="p-a">
               . The page you were looking for could not be found</p>
            <p className="p-b">
                ... Back to previous page
            </p>
            <a href='/' className="back">... Back to previous page</a>
        </div>
    </div>
	);
};

export default NotFound