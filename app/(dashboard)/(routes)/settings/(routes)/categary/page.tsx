import { Separator } from '@/components/ui/separator'
import CategaryForm from '../../_components/categary-form'

const SettingsCategaryPage = () => {
  return (
    <div className="space-y-6">
    <div>
      <h3 className="text-lg font-medium">Categary</h3>
      <p className="text-sm text-muted-foreground">
        This is how others will see you on the site.
      </p>
    </div>
    <Separator />
    <CategaryForm />
  </div>
  )
}

export default SettingsCategaryPage
