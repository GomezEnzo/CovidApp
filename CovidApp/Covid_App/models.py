from django.db import models

# Create your models here.
class Info(models.Model):
    pais = models.CharField(max_length=32, null=True)
    casosNuevos = models.CharField(max_length=32, null=True)
    casosCriticos = models.CharField(max_length=32, null=True)
    casosRecuperados = models.CharField(max_length=32, null=True)
    casosActivos = models.CharField(max_length=32, null=True)
    casosTotales = models.CharField(max_length=32, null=True)

    def __str__(self):
        return f"{self.pais} || {self.casosNuevos} nuevos casos"