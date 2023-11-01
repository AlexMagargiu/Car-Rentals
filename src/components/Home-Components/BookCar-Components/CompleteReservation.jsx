import { motion } from "framer-motion";

//ToDO, IDK
export default function CompleteReservation(props) {
  return (
    <motion.dialog onClick={(e) => e.stopPropagation()}>
      <p>asdasd</p>
      <button>Close</button>
    </motion.dialog>
  );
}
