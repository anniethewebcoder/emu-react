import notfoundimg from './../img/NotFound.jpg'

const NotFound = () => {

    return (
        <div className="folder">
            <div className="folderhead">
                404 - Page Not Found
            </div>
            <div className="folderbody">
                But please enjoy this cute happy dog.
                <img className="notfound" alt="notfound" src={notfoundimg} />
            </div>
        </div>
    )
}

export default NotFound