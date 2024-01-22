

export default async function SectionHeader() {
    return (
      <div className="row">
        <div className="col-md-10 offset-md-1">
          {/* Start Section Header Title */}
          <div className="section-header text-center mb-5" data-aos="fade-down">
            {/* Start Subtitle */}
            <div className="bg-gray-900 d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-white">
              Premier Collection
            </div>
            {/* /. End Subtitle */}
            {/* Start Section Header title */}
            <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">
              Essence Elegante: Unveil Your Signature Scent
            </h2>
            {/* /.End Section Header Title */}
            {/* Start Section Header Sub Title */}
            <div className="sub-title fs-16">
              Wissam Serdoun isn't just a brand; it's a global phenomenon.<br/> No
              matter where life takes you, carry the essence of elegance with
              our perfumes. (CHOSE TO BUY)
            </div>
            {/* /.End Section Header Sub Title */}
          </div>
          {/*/. End Section Header */}
        </div>
      </div>
    );
}
