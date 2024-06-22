import React from 'react';
import './LatestNews.css'; // Import your CSS file for styling
import Footer from '../Footer';

const Main = () => {
  return (
    <div>
      <main className="responsive-wrapper" style={{marginTop:'100px'}}>
      <div className="page-title">
        <h1>Latest Updates</h1>
      </div>
      <div className="magazine-layout">
        <div className="magazine-column">
          <article className="article">
            <h2 className="article-title article-title--large">
              <a href="#" className="article-link">
                The First Signs of <mark className="mark mark--primary">Alcoholic Liver</mark> Damage Are Not in the Liver
              </a>
            </h2>
            <div className="article-excerpt">
              <p className='p1'>The combination of my father's death and my personal background lit a fire in me to know more</p>
              <p className='p1'>He was admitted to the hospital on June 24, 2016.</p>
            </div>
            <div className="article-author">
              <div className="article-author-img">
                <img className='imga' src="https://assets.codepen.io/285131/author-3.png" alt="Author" />
              </div>
              <div className="article-author-info">
                <dl>
                  <dt>David Sherof</dt>
                  <dd>Reporter</dd>
                </dl>
              </div>
            </div>
          </article>
          <article className="article">
            <h2 className="article-title article-title--medium">
              <a href="#" className="article-link">The Founder's Guide to Actually Understanding Users Nowadays</a>
            </h2>
            <div className="article-creditation">
              <p className='p1'>By Johnathan O'Connell, Andrew Van Dam, Aaron Gregg and Alyssa Fowers</p>
            </div>
          </article>
        </div>
        <div className="magazine-column">
          <article className="article">
            <figure className="article-img">
              <img className='imga' src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Article" />
            </figure>
            <h2 className="article-title article-title--medium">
              <a href="#" className="article-link">How 7 Lines of Code Turned Into a $36 Billion Empire</a>
            </h2>
            <div className="article-excerpt">
              <p className='p1'>Yeah, it's safe to say these guys have a great sense of humor, which isn't really surprising for us considering their seemingly absurd solution to online payments. Instead of chasing 1000-hour programming contracts to build clunky payments solutions for each individual client, the Collison...</p>
            </div>
            <div className="article-author">
              <div className="article-author-img">
                <img className='imga' src="https://assets.codepen.io/285131/author-2.png" alt="Author" />
              </div>
              <div className="article-author-info">
                <dl>
                  <dt>James Robert</dt>
                  <dd>Editor</dd>
                </dl>
              </div>
            </div>
          </article>
        </div>

        <div className="magazine-column">
          <article className="article">
            <h2 className="article-title article-title--large">
              <a href="#" className="article-link">
                The First Signs of <mark className="mark mark--primary">Alcoholic Liver</mark> Damage Are Not in the Liver
              </a>
            </h2>
            <div className="article-excerpt">
              <p className='p1'>The combination of my father's death and my personal background lit a fire in me to know more</p>
              <p className='p1'>He was admitted to the hospital on June 24, 2016.</p>
            </div>
            <div className="article-author">
              <div className="article-author-img">
                <img className='imga' src="https://assets.codepen.io/285131/author-3.png" alt="Author" />
              </div>
              <div className="article-author-info">
                <dl>
                  <dt>David Sherof</dt>
                  <dd>Reporter</dd>
                </dl>
              </div>
            </div>
          </article>
          <article className="article">
            <h2 className="article-title article-title--medium">
              <a href="#" className="article-link">The Founder's Guide to Actually Understanding Users Nowadays</a>
            </h2>
            <div className="article-creditation">
              <p className='p1'>By Johnathan O'Connell, Andrew Van Dam, Aaron Gregg and Alyssa Fowers</p>
            </div>
          </article>
        </div>
        {/* Additional articles can be added similarly */}
      </div>
      <div className="container">
            <section className="article-page">
                {/* First Article */}
                <article>
                    <img src="../images/articles/ent1.jpg" alt="" />
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <div>
                        <p className='p1'>
                            <i className="fas fa-user fa-1x"></i> Written By XYZ April 14, 2021
                        </p>
                        <p className="entertainment-category">Entertainment</p>
                    </div>
                    <p className='p1' >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
                        debitis beatae ad doloremque voluptate, blanditiis suscipit error
                        quam fugit sapiente, aliquid quia libero incidunt recusandae enim
                        voluptas nulla sequi similique? Temporibus ad est minima magni
                        molestias obcaecati consequatur cumque exercitationem deleniti eos,
                        animi facere recusandae, pariatur eveniet neque? Voluptatem,
                        molestias.
                    </p>
                    <p className='p1'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
                        dignissimos dolorum ipsam corporis similique! Quis, esse minus?
                        Ducimus tempore provident sunt officia? Velit temporibus harum
                        voluptate, ipsum quisquam rerum doloremque consectetur quos incidunt
                        deleniti dicta excepturi ratione, fugiat ad fuga in nam dolorum aut
                        minus esse voluptatum suscipit et quae. Repellendus minus, ratione
                        aperiam commodi voluptas iusto aliquam sapiente. Aut obcaecati,
                        corporis praesentium porro nostrum excepturi animi repellendus
                        incidunt non quis nisi assumenda voluptas possimus molestiae
                        laboriosam iure sed architecto in perferendis magnam blanditiis
                        voluptatum placeat labore odio? Unde id dolore aliquam, quas sit
                        harum, saepe maiores facilis aliquid molestiae qui. Praesentium
                        rerum, minima fugit laudantium quaerat voluptatem pariatur sequi
                        saepe blanditiis nobis natus possimus quo, assumenda numquam sit,
                        eaque accusamus incidunt exercitationem quis deleniti quisquam
                        corrupti vel? Ut quisquam consequatur, doloribus voluptatibus iusto
                        quaerat, sint non magnam reiciendis amet quos sapiente excepturi
                        omnis laboriosam nobis, expedita delectus odio provident?
                    </p>
                </article>

                {/* Second Article - Categories */}
                <article>
                    <h3>CATEGORIES</h3>
                    <ul>
                        <li>Sports</li>
                        <li>Entertainment</li>
                        <li>Technology</li>
                        <li>Fashion</li>
                        <li>Shopping</li>
                    </ul>
                </article>

                {/* Third Article - Join Club */}
                
            </section>
        </div>
        <div className="magazine-column">
          <article className="article">
            <h2 className="article-title article-title--large">
              <a href="#" className="article-link">
                The First Signs of <mark className="mark mark--primary">Alcoholic Liver</mark> Damage Are Not in the Liver
              </a>
            </h2>
            <div className="article-excerpt">
              <p className='p1'>The combination of my father's death and my personal background lit a fire in me to know more</p>
              <p className='p1'>He was admitted to the hospital on June 24, 2016.</p>
            </div>
            <div className="article-author">
              <div className="article-author-img">
                <img className='imga' src="https://assets.codepen.io/285131/author-3.png" alt="Author" />
              </div>
              <div className="article-author-info">
                <dl>
                  <dt>David Sherof</dt>
                  <dd>Reporter</dd>
                </dl>
              </div>
            </div>
          </article>
          <article className="article">
            <h2 className="article-title article-title--medium">
              <a href="#" className="article-link">The Founder's Guide to Actually Understanding Users Nowadays</a>
            </h2>
            <div className="article-creditation">
              <p className='p1'>By Johnathan O'Connell, Andrew Van Dam, Aaron Gregg and Alyssa Fowers</p>
            </div>
          </article>
        </div>
       
    </main>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    
    <Footer></Footer>
    </div>
    
    
  );
};

export default Main;
