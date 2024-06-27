import { Activity, Submission } from "../entity"

// We do not want to destroy all the tables, some have static data e.g. River
export const truncate = async () => {
    await Activity.destroy({ truncate: true, cascade: true })
    await Submission.destroy({ truncate: true, cascade: true })
}