import React from 'react';

const Memo = React.memo(() => {

    // Using memo will cause React to skip rendering a component if its props have not changed.
    // console.log('me renderice')
    // let count = 0

    // for(count; count <= 1000; count++){
    //     console.log(count)
    // }

    return(
        <div className='container my-5'>
            soy un memo
            {/* {count} */}
        </div>
    )
})

export default Memo;
