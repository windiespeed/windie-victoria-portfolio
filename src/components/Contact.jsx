export default function Contact() {
    return (
        <section id="contact" className="contact">
            <h2>Contact Me</h2>
            <form>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message"></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
    );
}
