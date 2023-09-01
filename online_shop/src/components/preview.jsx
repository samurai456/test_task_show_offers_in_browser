
function Preview({offer}){

    return <div className='py-3 my-2 row w-100 border rounded'>
        <div className='p-0 m-0 col-11 col-lg-3 col-md-4 col-sm-5 me-4 d-flex align-items-center justify-content-center'>
            <img 
                src={offer.image.url} 
                style={{
                    height: offer.image.height, 
                    width: offer.image.width,
                }}
            />
        </div>
        <div className='p-0 m-0 col-12 col-lg-8 col-md-7 col-sm-6 py-3 row justify-content-center'>
            <div className='col-sm-12 col-auto '>
                <div>name: <b>{offer.name}</b></div>
                <div>brand: <b>{offer.brand}</b></div>
                <div>category: <b>{offer.category}</b></div>
                <div>merchant: <b>{offer.merchant}</b></div>
                {offer.attributes.map((i, key)=><div key={key}>{i.name}: <b>{i.value}</b></div>)}
            </div>
        </div>
    </div>
}

export { Preview }