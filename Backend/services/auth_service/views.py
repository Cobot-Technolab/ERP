from rest_framework.views import APIView
from rest_framework.response import Response
from .oauth import google_login, microsoft_login
from rest_framework_simplejwt.tokens import RefreshToken

class GoogleLoginView(APIView):
    """Google OAuth Login"""
    def post(self, request):
        access_token = request.data.get("access_token")
        user = google_login(access_token)
        if user:
            refresh = RefreshToken.for_user(user)
            return Response({
                "refresh": str(refresh),
                "access": str(refresh.access_token),
                "user": {"email": user.email}
            })
        return Response({"error": "Invalid Google Token"}, status=400)

class MicrosoftLoginView(APIView):
    """Microsoft OAuth Login"""
    def post(self, request):
        access_token = request.data.get("access_token")
        user = microsoft_login(access_token)
        if user:
            refresh = RefreshToken.for_user(user)
            return Response({
                "refresh": str(refresh),
                "access": str(refresh.access_token),
                "user": {"email": user.email}
            })
        return Response({"error": "Invalid Microsoft Token"}, status=400)
