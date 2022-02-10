import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the numbers in 6 tries. After each guess, the color of the tiles
        will change to show how close your guess was to the numbers.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="1" status="correct" />
        <Cell value="2" />
        <Cell value="3" />
        <Cell value="4" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The number 1 is in the number and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="2" />
        <Cell value="3" />
        <Cell value="7" status="present" />
        <Cell value="8" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The number 7 is in the number but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="3" />
        <Cell value="2" />
        <Cell value="1" />
        <Cell value="0" status="absent" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The number 0 is not in the number in any spot.
      </p>
    </BaseModal>
  )
}
