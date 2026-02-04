import { motion, useScroll } from 'motion/react';

const App = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="text-white text-center p-20 font-mono">
      <motion.div
        className="w-full h-2 origin-left bg-red-500 fixed top-0 left-0"
        style={{
          scaleX: scrollYProgress,
        }}
      ></motion.div>
      <h1 className="text-4xl mb-5 font-bold">Sheriyans Coding School</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et tempore,
        eligendi deleniti quaerat, culpa accusantium eveniet dolorum, vitae
        cupiditate reiciendis ab aliquam delectus in aut rem ducimus amet?
        Impedit dignissimos soluta porro delectus facere eveniet magnam sequi
        perferendis fugit. Expedita, perferendis culpa cupiditate veniam minus
        fugit ipsam id quasi, ut sunt blanditiis debitis dignissimos illo
        voluptatum. Obcaecati reiciendis doloribus rem commodi sequi nihil
        nesciunt nam ipsum consequatur quae aliquam quis eius ullam excepturi
        modi magni, tenetur ea illum harum aut fuga maiores consectetur? Aperiam
        architecto incidunt ducimus recusandae saepe tempora, fuga eius, dolorem
        et dolores dolore aliquid doloremque id molestiae, ratione soluta
        corrupti reprehenderit voluptatibus odio quibusdam. Praesentium
        aspernatur ipsa repellat architecto tempora reprehenderit, minima
        inventore cupiditate. Voluptatum aliquid iste alias repudiandae nihil
        libero totam tempora accusamus impedit sint provident, possimus nobis
        ullam reiciendis sequi cumque. Nam similique voluptatibus saepe dicta
        quia amet porro quas mollitia provident, temporibus dolore? Corporis
        dolor voluptatibus vitae beatae reiciendis ipsum quam saepe tenetur,
        amet officiis vero error ratione est facere esse! Cumque cupiditate
        dolore asperiores vitae enim ipsam quis distinctio accusamus tenetur ab
        obcaecati ea quae, consectetur dicta commodi praesentium laboriosam quas
        molestiae voluptatum sequi earum perspiciatis vel excepturi omnis!
        Deserunt beatae facilis laborum?
      </p>
      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, eveniet
        hic assumenda voluptatem similique a possimus nisi voluptatum obcaecati
        praesentium dicta, ratione fugiat? Quaerat neque, dolore quod, omnis
        veniam possimus id accusantium vero fugit quae esse, suscipit tempora
        eaque ducimus. Dignissimos, quisquam facilis excepturi quae ducimus
        aspernatur ad quibusdam placeat. Aliquam ad adipisci repellat quas
        officia consequuntur praesentium incidunt, ex eligendi pariatur rem
        nihil illum quisquam hic optio fuga vel delectus eveniet? Adipisci
        molestiae laboriosam iusto ipsum. Inventore quaerat deserunt, laborum ex
        fuga quidem, fugiat debitis possimus ullam eius ratione maiores ab
        laudantium, odit natus eos officia quae iusto officiis ad id. Recusandae
        odio quibusdam numquam consectetur mollitia fuga, eaque culpa id, sit
        doloremque rem quis magni provident harum blanditiis odit eveniet dolore
        ut velit iusto saepe tempore debitis? Ea error libero quaerat?
        Accusantium, deleniti. Officia obcaecati illum nesciunt aut inventore
        sint excepturi minima voluptatem, consectetur, beatae repellat sed rerum
        quas unde voluptates aspernatur, sit molestias possimus facere fuga
        iusto. Quasi, ipsam quia minus maxime, odit rerum in veniam quam sunt
        doloribus ratione quisquam maiores optio nobis cumque nemo soluta unde,
        eveniet ab vitae facere. Adipisci nostrum iure deserunt ratione nihil?
        Commodi aliquid esse dolorum at consequatur nihil saepe ratione?
      </p>
      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, eveniet
        hic assumenda voluptatem similique a possimus nisi voluptatum obcaecati
        praesentium dicta, ratione fugiat? Quaerat neque, dolore quod, omnis
        veniam possimus id accusantium vero fugit quae esse, suscipit tempora
        eaque ducimus. Dignissimos, quisquam facilis excepturi quae ducimus
        aspernatur ad quibusdam placeat. Aliquam ad adipisci repellat quas
        officia consequuntur praesentium incidunt, ex eligendi pariatur rem
        nihil illum quisquam hic optio fuga vel delectus eveniet? Adipisci
        molestiae laboriosam iusto ipsum. Inventore quaerat deserunt, laborum ex
        fuga quidem, fugiat debitis possimus ullam eius ratione maiores ab
        laudantium, odit natus eos officia quae iusto officiis ad id. Recusandae
        odio quibusdam numquam consectetur mollitia fuga, eaque culpa id, sit
        doloremque rem quis magni provident harum blanditiis odit eveniet dolore
        ut velit iusto saepe tempore debitis? Ea error libero quaerat?
        Accusantium, deleniti. Officia obcaecati illum nesciunt aut inventore
        sint excepturi minima voluptatem, consectetur, beatae repellat sed rerum
        quas unde voluptates aspernatur, sit molestias possimus facere fuga
        iusto. Quasi, ipsam quia minus maxime, odit rerum in veniam quam sunt
        doloribus ratione quisquam maiores optio nobis cumque nemo soluta unde,
        eveniet ab vitae facere. Adipisci nostrum iure deserunt ratione nihil?
        Commodi aliquid esse dolorum at consequatur nihil saepe ratione?
      </p>
      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, eveniet
        hic assumenda voluptatem similique a possimus nisi voluptatum obcaecati
        praesentium dicta, ratione fugiat? Quaerat neque, dolore quod, omnis
        veniam possimus id accusantium vero fugit quae esse, suscipit tempora
        eaque ducimus. Dignissimos, quisquam facilis excepturi quae ducimus
        aspernatur ad quibusdam placeat. Aliquam ad adipisci repellat quas
        officia consequuntur praesentium incidunt, ex eligendi pariatur rem
        nihil illum quisquam hic optio fuga vel delectus eveniet? Adipisci
        molestiae laboriosam iusto ipsum. Inventore quaerat deserunt, laborum ex
        fuga quidem, fugiat debitis possimus ullam eius ratione maiores ab
        laudantium, odit natus eos officia quae iusto officiis ad id. Recusandae
        odio quibusdam numquam consectetur mollitia fuga, eaque culpa id, sit
        doloremque rem quis magni provident harum blanditiis odit eveniet dolore
        ut velit iusto saepe tempore debitis? Ea error libero quaerat?
        Accusantium, deleniti. Officia obcaecati illum nesciunt aut inventore
        sint excepturi minima voluptatem, consectetur, beatae repellat sed rerum
        quas unde voluptates aspernatur, sit molestias possimus facere fuga
        iusto. Quasi, ipsam quia minus maxime, odit rerum in veniam quam sunt
        doloribus ratione quisquam maiores optio nobis cumque nemo soluta unde,
        eveniet ab vitae facere. Adipisci nostrum iure deserunt ratione nihil?
        Commodi aliquid esse dolorum at consequatur nihil saepe ratione?
      </p>
    </div>
  );
};

export default App;
