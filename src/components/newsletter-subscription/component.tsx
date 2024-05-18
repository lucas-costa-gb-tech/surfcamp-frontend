export const NewsletterSubscription = () => (
  <section className='newsletter'>
    <div className='newletter__info'>
      <h4>subscribe to our newletter</h4>
      <p className='copy'>Unlock Exclusive Insights and Stay In the Know – Subscribe to Our Newsletter Today to always stay in touch</p>
    </div>
    <form className='newsletter__form'>
      <input type='text' className='newsletter__email input' placeholder='Enter your email address' />
      <button className='newsletter__subscribe btn btn--medium btn--turquoise'>SUBSCRIBE</button>
    </form>
  </section>
);
